package com.smoothiemx.customersapp.app.services;

import com.smoothiemx.customersapp.app.models.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();
}