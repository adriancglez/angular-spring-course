package com.smoothiemx.app.services;

import com.smoothiemx.app.models.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();
}