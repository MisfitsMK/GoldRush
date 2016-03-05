import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    selector: 'my-employee-detail',
    templateUrl: 'app/employee-detail.component.html',
    styleUrls: ['app/employee-detail.component.css'],
    inputs: ['employee']
})
export class EmployeeDetailComponent {
    employee: Employee;

    constructor(
        private _employeeService: EmployeeService,
        private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._employeeService.getEmployee(id)
            .then(employee => this.employee = employee);
    }

    goBack() {
        window.history.back();
    }

}
