package com.smoothiemx.app.services;

import com.smoothiemx.app.models.Cliente;
import com.smoothiemx.app.repositories.IClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClienteServiceImpl implements IClienteService {

    private final IClienteRepository iClienteRepository;

    @Autowired
    public ClienteServiceImpl(IClienteRepository iClienteRepository) {
        this.iClienteRepository = iClienteRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return (List<Cliente>) this.iClienteRepository.findAll();
    }
}