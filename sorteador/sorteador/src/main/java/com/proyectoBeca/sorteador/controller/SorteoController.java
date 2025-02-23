package com.proyectoBeca.sorteador.controller;

import com.proyectoBeca.sorteador.model.Sorteo;
import com.proyectoBeca.sorteador.service.ISorteoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping; // Importamos PostMapping
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("sorteo/")
public class SorteoController {

    @Autowired
    ISorteoService sorteoService;

    @GetMapping("listar")
    public ResponseEntity<List<Sorteo>> getSorteos() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(sorteoService.getSorteos());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }
    }

    @GetMapping("cargar-datos")
    public ResponseEntity<String> init() {
        try {
            sorteoService.init();
            return ResponseEntity.status(HttpStatus.OK).body("Datos cargados correctamente.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Los datos no se pudieron cargar correctamente.");
        }
    }

    @GetMapping("ultimo-sorteo")
    public Sorteo getLastSorteo() {
        return sorteoService.getUltimoSorteo();
    }

    // Nueva ruta para el reset
    @PostMapping("resetear")
    public ResponseEntity<String> resetearSorteo() {
        try {
            sorteoService.resetear();  // Llamamos al método de reset
            return ResponseEntity.status(HttpStatus.OK).body("Sorteo reiniciado correctamente.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al reiniciar el sorteo.");
        }
    }
}
