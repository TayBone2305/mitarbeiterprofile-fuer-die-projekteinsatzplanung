package codecreate2022.backend.service;

import codecreate2022.backend.exceptions.UserNotFoundException;
import codecreate2022.backend.model.Employee;
import codecreate2022.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAllEmployees(){
       return employeeRepository.findAll();
    }

    public Employee findEmployeeById(int id) {
        return employeeRepository.findEmployeeById(id)
                .orElseThrow(() -> new UserNotFoundException("User with id: " + id + " was not found!"));
    }
    public void deleteEmployeeById(int id) {
        employeeRepository.deleteEmployeeById(id);
    }

    public Employee addEmployee(Employee employee) {
       return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Employee employee) {
        Employee newEmployee = employee;
        return employeeRepository.save(newEmployee);
    }
}
