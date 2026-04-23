package FullstackApp.controller;

import FullstackApp.exception.customeExceptions.ResourceNotFoundException;
import FullstackApp.entity.Employee;
import FullstackApp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        System.out.println("Inside employee controller, getAllEmployees method");
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        System.out.println("Inside employee controller , create employee method");
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        System.out.println("Inside employee controller , getEmployeeById method for id = " + id);
        Employee emp = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("employees not found with id = " + id));
        return ResponseEntity.ok(emp);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
        System.out.println("Inside Employee controller , Update Employee method for emp id = " + id);
        Employee employee1 = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employees not found with id = " + id + " to update "));
        employee1.setFirstName(employee.getFirstName());
        employee1.setLastName(employee.getLastName());
        employee1.setSalary(employee.getSalary());
        employeeRepository.save(employee1);
        return ResponseEntity.ok(employee1);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id) {
        System.out.println("Inside Employee Controller , delete method for emp id = " + id);
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employees not found with id = " + id + " to delete "));
        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
