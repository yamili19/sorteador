package com.proyectoBeca.sorteador.service;

import com.proyectoBeca.sorteador.model.Sorteo;
import com.proyectoBeca.sorteador.repository.SorteoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SorteoService implements ISorteoService {
    @Autowired
    private SorteoRepository sorteoRepository;

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

}
