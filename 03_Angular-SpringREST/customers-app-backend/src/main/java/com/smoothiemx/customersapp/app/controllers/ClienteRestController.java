package com.smoothiemx.customersapp.app.controllers;

import com.smoothiemx.customersapp.app.models.Cliente;
import com.smoothiemx.customersapp.app.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public Cliente show(@PathVariable("id") Long id) {
        return this.iClienteService.findById(id);
    }

    @PostMapping("/clientes")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente create(@RequestBody Cliente cliente) {
        return this.iClienteService.save(cliente);
    }

    @PutMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente update(@RequestBody Cliente cliente, @PathVariable("id") Long id) {
        Cliente clienteActual = this.iClienteService.findById(id);
        clienteActual.setApellido(cliente.getApellido());
        clienteActual.setNombre(cliente.getNombre());
        clienteActual.setEmail(cliente.getEmail());
        return this.iClienteService.save(clienteActual);
    }

    @DeleteMapping("/clientes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable("id") Long id) {
        this.iClienteService.delete(id);
    }
}