package com.smoothiemx.customersapp.app.services;

import com.smoothiemx.customersapp.app.models.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();

    public Cliente findById(Long id);

    public Cliente save(Cliente cliente);

    public  void delete(Long id);
}