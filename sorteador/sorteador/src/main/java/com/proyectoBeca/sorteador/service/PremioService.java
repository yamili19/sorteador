package com.proyectoBeca.sorteador.service;

import com.proyectoBeca.sorteador.model.Premio;
import com.proyectoBeca.sorteador.repository.PremioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PremioService implements IPremioService {

    @Autowired
    private PremioRepository premioRepository;


    @Override
    public List<Premio> listarPremios() {
        return premioRepository.findAll();
    }

    @Override
    public void guardarPremio(Premio premio) {
        if (premio.getNombrePremio() == null || premio.getImagenSponsor() == null) {
            throw new IllegalArgumentException("El nombre y la imagen del premio son obligatorios.");
        }
        if (!premio.esImagenBase64Valida(premio.getImagenSponsor())) {
            throw new IllegalArgumentException("La imagen no está en un formato base64 válido.");
        }
        premioRepository.save(premio);
    }

    @Override
    public void eliminarPremios() {
        premioRepository.deleteAll();
    }

    @Override
    public void eliminarPremio(Premio premio) {
        premioRepository.delete(premio);
    }
}
