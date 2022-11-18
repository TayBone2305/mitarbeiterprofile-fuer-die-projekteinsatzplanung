package codecreate2022.backend.repository;

import codecreate2022.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    void deleteEmployeeById(int id);

    Optional<Employee> findEmployeeById(int id);
}
