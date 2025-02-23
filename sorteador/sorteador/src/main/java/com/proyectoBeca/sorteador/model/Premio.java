package com.proyectoBeca.sorteador.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Premio {
    private Long idPremio;
    private String nombrePremio;
    private String nombreSponsor;
    private String imagenSponsor;

    public boolean esImagenBase64Valida(String imagenBase64) {
        return imagenBase64 != null && imagenBase64.startsWith("data:image/") && imagenBase64.contains(";base64,");
    }
}
