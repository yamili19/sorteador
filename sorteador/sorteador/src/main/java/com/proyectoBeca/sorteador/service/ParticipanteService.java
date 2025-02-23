package com.proyectoBeca.sorteador.service;

import com.proyectoBeca.sorteador.model.Participante;
import com.proyectoBeca.sorteador.repository.ParticipanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class ParticipanteService implements IParticipanteService {

    @Autowired
    private ParticipanteRepository participanteRepository;

    @Override
    public List<Participante> listarParticipante() {
        return participanteRepository.findAll();
    }

    @Override
    public void cargarDesdeExcel(MultipartFile file) {
        try {
            // Guardar el archivo temporalmente en el sistema
            String tempFilePath = "C:/" + file.getOriginalFilename();
            file.transferTo(new File(tempFilePath)); // Guardamos el archivo temporalmente

            // Ahora pasamos la ruta temporal al repositorio
            participanteRepository.cargarDesdeExcel(tempFilePath);
        } catch (IOException e) {
            throw new RuntimeException("Error al guardar el archivo: " + e.getMessage());
        }
    }

}
