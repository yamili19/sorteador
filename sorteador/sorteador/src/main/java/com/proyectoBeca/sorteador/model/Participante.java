package com.proyectoBeca.sorteador.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Participante {
    private Long nroInscripcion;
    private String nombreCompleto;
    private String dni;
}
