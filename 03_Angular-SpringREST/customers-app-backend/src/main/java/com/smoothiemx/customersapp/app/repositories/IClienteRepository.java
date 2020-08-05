package com.smoothiemx.customersapp.app.repositories;

import com.smoothiemx.customersapp.app.models.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteRepository extends CrudRepository<Cliente, Long> {
}