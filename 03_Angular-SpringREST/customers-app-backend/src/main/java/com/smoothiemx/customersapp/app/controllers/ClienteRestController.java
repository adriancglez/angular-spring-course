package com.smoothiemx.customersapp.app.controllers;

import com.smoothiemx.customersapp.app.models.Cliente;
import com.smoothiemx.customersapp.app.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {

    private final IClienteService iClienteService;

    @Autowired
    public ClienteRestController(IClienteService iClienteService) {
        this.iClienteService = iClienteService;
    }

    @GetMapping("/clientes")
    public List<Cliente> getIndex() {
        List<Cliente> clientes = this.iClienteService.findAll();
        return clientes;
    }

    @GetMapping("/clientes/{id}")
    public ResponseEntity<?> show(@PathVariable("id") String idx) {

        Cliente cliente = null;
        Map<String, Object> response = new HashMap<>();
        long id;

        try {
            id = Long.parseLong(idx);
            cliente = this.iClienteService.findById(id);

            if(cliente == null) {
                response.put("mensaje", "Error al consultar Cliente en el Sistema");
                response.put("error", "El cliente con el id ".concat(Long.toString(id).concat( " no existe en el sistema")));

                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
            }
        } catch (DataAccessException ex) {
            response.put("mensaje", "Error al consultar Cliente en el Sistema");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(" ").concat(ex.getMostSpecificCause().getMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (NumberFormatException ex) {
            response.put("mensaje", "El id es inválido");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(" ").concat(ex.getLocalizedMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
    }

    @PostMapping("/clientes")
    public ResponseEntity<?> create(@RequestBody Cliente cliente) {

        Cliente nuevoCliente = null;
        Map<String, Object> response = new HashMap<>();

        try {
            nuevoCliente = this.iClienteService.save(cliente);
        } catch (DataAccessException ex) {
            response.put("mensaje", "Error al guardar cliente");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(": ").concat(ex.getMostSpecificCause().getMessage()));

            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        response.put("mensaje", "El cliente ha sido creado con éxito");
        response.put("cliente", nuevoCliente);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<?> update(@RequestBody Cliente cliente, @PathVariable("id") String idx) {


        Cliente clienteActual = null;
        Cliente clienteUpdated = null;
        Map<String, Object> response = new HashMap<>();
        long id;

        try {
            id = Long.parseLong(idx);
            clienteActual = this.iClienteService.findById(id);

            if (clienteActual == null) {
                response.put("mensaje", "Error al actualizar cliente");
                response.put("error", "El cliente con el id ".concat(Long.toString(id).concat(" no existe en el sistema")));

                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
            }

            clienteUpdated = this.iClienteService.save(cliente);
        } catch (DataAccessException ex) {
            response.put("mensaje", "Error al actualizar cliente");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(" ").concat(ex.getLocalizedMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        } catch (NumberFormatException ex) {
            response.put("mensaje", "El id es inválido");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(" ").concat(ex.getLocalizedMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }

        response.put("mensaje", "El cliente ha sido actualizado con éxito");
        response.put("cliente", clienteUpdated);

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.CREATED);

    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String idx) {

        Map<String, Object> response = new HashMap<>();
        long id;

        try {
            id = Long.parseLong(idx);
            Cliente cliente = this.iClienteService.findById(id);

            if (cliente == null) {
                response.put("mensaje", "Error al eliminar cliente");
                response.put("error", "El cliente con el id ".concat(Long.toString(id).concat( " no existe en el sistema")));

                return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
            }

            this.iClienteService.delete(id);
        } catch (DataAccessException ex) {
            response.put("mensaje", "Error al eliminar cliente");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(": ").concat(ex.getMostSpecificCause().getMessage()));

            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (NumberFormatException ex) {
            response.put("mensaje", "El id es inválido");
            response.put("error", Objects.requireNonNull(ex.getMessage()).concat(" ").concat(ex.getLocalizedMessage()));

            return new ResponseEntity<Map<String, Object>>(response, HttpStatus.BAD_REQUEST);
        }

        response.put("mensaje", "El cliente ha sido eliminado con éxito");

        return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
    }
}