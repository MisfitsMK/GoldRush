import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {EmployeeDetailComponent} from './employee-detail.component';


@Component({
    selector: 'my-employees',
    templateUrl: 'app/employees.component.html',
    styleUrls: ['app/employees.component.css'],
    directives: [EmployeeDetailComponent],
})
export class EmployeesComponent implements OnInit {
    title = 'Employee List';
    employees: Employee[];
    selectedEmployee: Employee;

    ngOnInit() {
        this.getEmployees();
    }

    constructor(
        private _router: Router,
        private _employeeService: EmployeeService
    ) { }

    getEmployees() {
        this._employeeService.getEmployees().then(employees => this.employees = employees);
    }

    onSelect(employee: Employee) {
        this.selectedEmployee = employee;
    }

    gotoDetail() {
        this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);
    }
}

