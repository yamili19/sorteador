package com.proyectoBeca.sorteador.repository;

import com.proyectoBeca.sorteador.model.Participante;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Repository;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ParticipanteRepository {
    private final List<Participante> participantes = new ArrayList<>();

    public List<Participante> findAll() {
        return participantes;
    }

    public void save(Participante participante) {
        participantes.add(participante);
    }

    public void saveAll(List<Participante> participantes) {
        this.participantes.addAll(participantes);
    }

    public void clear() {
        participantes.clear();
    }

    // Lógica para cargar desde un archivo Excel
    public void cargarDesdeExcel(String filePath) throws IOException {
        try (FileInputStream fileInputStream = new FileInputStream(filePath);
             Workbook workbook = new XSSFWorkbook(fileInputStream)) {

            // Obtener la primera hoja
            Sheet sheet = workbook.getSheetAt(0);

            // Limpiar lista antes de cargar
            participantes.clear();

            // Leer filas (omitir la cabecera)
            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {

                    Participante participante = new Participante();

                    // Leer valores de cada celda
                    participante.setNroInscripcion(Long.valueOf((int) row.getCell(0).getNumericCellValue()));
                    participante.setNombreCompleto(String.valueOf(row.getCell(1).getStringCellValue()));
                    participante.setDni(Long.toString(Long.valueOf((int) row.getCell(2).getNumericCellValue())));

                    // Agregar a la lista
                    participantes.add(participante);
                }
            }
        }
    }

}
