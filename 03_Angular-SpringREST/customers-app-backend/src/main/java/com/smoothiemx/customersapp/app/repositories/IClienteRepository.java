package com.smoothiemx.customersapp.app.repositories;

import com.smoothiemx.customersapp.app.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClienteRepository extends JpaRepository<Cliente, Long> {
}