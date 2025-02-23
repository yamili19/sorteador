package com.proyectoBeca.sorteador.repository;

import com.proyectoBeca.sorteador.model.Premio;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PremioRepository {
    private final List<Premio> premios = new ArrayList<>();

    public List<Premio> findAll() {
        return premios;
    }

    public void save(Premio premio) {
        if (!premios.contains(premio)) { // Evitar duplicados
            premios.add(premio);
        }
    }

    public void delete(Premio premio) {
        premios.remove(premio);
    }

    public void deleteAll() {
        premios.clear();
    }
}