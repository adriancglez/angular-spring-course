package com.smoothiemx.app.controllers;

import com.smoothiemx.app.models.Cliente;
import com.smoothiemx.app.services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
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
}