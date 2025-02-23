package com.proyectoBeca.sorteador.service;

import com.proyectoBeca.sorteador.model.Sorteo;
import com.proyectoBeca.sorteador.repository.SorteoRepository;
import com.proyectoBeca.sorteador.repository.PremioRepository;
import com.proyectoBeca.sorteador.repository.ParticipanteRepository; // Si tienes repositorios para premios y participantes
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SorteoService implements ISorteoService {

    @Autowired
    private SorteoRepository sorteoRepository;
    @Autowired
    private PremioRepository premioRepository;  // Repositorio de premios
    @Autowired
    private ParticipanteRepository participanteRepository; // Repositorio de participantes

    @Override
    public List<Sorteo> getSorteos() {
        try {
            return sorteoRepository.sortear();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void init() {
        try {
            sorteoRepository.init();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Sorteo getUltimoSorteo() {
        return sorteoRepository.findLastSorteo();
    }

    @Override
    public void resetear() {
        try {
            // Limpiamos los premios, historial y participantes
            premioRepository.deleteAll();  // Borra todos los premios
            participanteRepository.clear();  // Borra todos los participantes
            sorteoRepository.clear();  // Borra todos los sorteos

        } catch (Exception e) {
            throw new RuntimeException("Error al reiniciar el sorteo", e);
        }
    }
}
