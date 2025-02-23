package com.proyectoBeca.sorteador.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Sorteo {
    private Long idPremio;
    private String nombrePremio;
    private String nombreCompleto;
    private String dni;
}
