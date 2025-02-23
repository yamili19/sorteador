package com.proyectoBeca.sorteador.service;


import com.proyectoBeca.sorteador.model.Sorteo;

import java.util.List;

public interface ISorteoService {
    public List<Sorteo> getSorteos();

    public void init();

    public Sorteo getUltimoSorteo();

    public void resetear();
}
