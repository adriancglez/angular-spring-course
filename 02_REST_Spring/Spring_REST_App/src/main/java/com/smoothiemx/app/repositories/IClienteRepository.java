package com.smoothiemx.app.repositories;

import com.smoothiemx.app.models.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteRepository extends CrudRepository<Cliente, Long> {
}