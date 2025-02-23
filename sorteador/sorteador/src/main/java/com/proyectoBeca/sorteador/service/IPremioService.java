package com.proyectoBeca.sorteador.service;

import com.proyectoBeca.sorteador.model.Premio;

import java.util.List;

public interface IPremioService {
    public List<Premio> listarPremios();

    public void guardarPremio(Premio premio);

    public void eliminarPremios();

    public void eliminarPremio(Premio premio);

}
