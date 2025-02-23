package com.proyectoBeca.sorteador.repository;

import com.proyectoBeca.sorteador.model.Participante;
import com.proyectoBeca.sorteador.model.Premio;
import com.proyectoBeca.sorteador.model.Sorteo;
import com.proyectoBeca.sorteador.service.IParticipanteService;
import com.proyectoBeca.sorteador.service.IPremioService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

@Repository
public class SorteoRepository {

    @Autowired
    private IParticipanteService participanteService;

    @Autowired
    private IPremioService premioService;

    private final List<Sorteo> sorteos = new ArrayList<>();
    private List<Participante> participantes;
    private List<Premio> premios;
    private Sorteo lastSorteo;


    public void init() {
        premios = premioService.listarPremios();
        participantes = participanteService.listarParticipante();
        if (premios.isEmpty()) {
            throw new IllegalStateException("No se cargaron premios.");
        }
        if (participantes.isEmpty()) {
            throw new IllegalStateException("No se cargaron participantes.");
        }
    }


    public List<Sorteo> sortear() {
        if (premios.isEmpty()) {
            throw new IllegalStateException("No hay más premios disponibles para sortear.");
        }
        if (participantes.isEmpty()) {
            throw new IllegalStateException("No hay participantes disponibles para sortear.");
        }

        // Tomar el primer premio disponible
        Premio premio = premios.remove(0);

        // Mezclar y tomar un participante al azar
        Collections.shuffle(participantes);
        Participante participanteGanador = participantes.remove(0);

        // Crear nuevo sorteo
        Sorteo sorteo = new Sorteo();
        sorteo.setIdPremio(premio.getIdPremio());
        sorteo.setNombrePremio(premio.getNombrePremio());
        sorteo.setNombreCompleto(participanteGanador.getNombreCompleto());
        sorteo.setDni(participanteGanador.getDni());

        // Guardar en lista e historial
        sorteos.add(sorteo);
        lastSorteo = sorteo;

        return new ArrayList<>(sorteos); // Retornar copia de la lista de sorteos
    }

    public List<Sorteo> findAll() {
        return new ArrayList<>(sorteos); // Retornar copia para evitar modificaciones externas
    }

    public Sorteo findLastSorteo() {
        if (lastSorteo == null) {
            throw new IllegalStateException("Aún no se ha realizado ningún sorteo.");
        }
        return lastSorteo;
    }

    // Nuevo método deleteAll() para eliminar todos los sorteos, premios y participantes
    public void clear() {
        sorteos.clear();           // Elimina todos los sorteos
        premios.clear();           // Opcional: Limpiar la lista de premios si es necesario
        participantes.clear();     // Opcional: Limpiar la lista de participantes si es necesario
        lastSorteo = null;         // Opcional: Resetear el último sorteo
    }
}

