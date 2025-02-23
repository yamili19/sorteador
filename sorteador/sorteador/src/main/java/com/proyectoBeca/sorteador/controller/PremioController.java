package com.proyectoBeca.sorteador.controller;

import com.proyectoBeca.sorteador.model.Premio;
import com.proyectoBeca.sorteador.service.IPremioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("premio/")
public class PremioController {
    @Autowired
    private IPremioService premioService;

    @GetMapping("listar")
    public List<Premio> listarPremios() {
        return premioService.listarPremios();
    }

    @PostMapping("guardar")
    public void guardarPremio(@RequestBody Premio premio) {
        premioService.guardarPremio(premio);
    }

    @DeleteMapping("eliminar")
    public void eliminarPremios() {
        premioService.eliminarPremios();
    }
}
