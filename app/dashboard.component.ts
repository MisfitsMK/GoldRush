import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { ShopItem } from './shop-item'; 
import { ShopItemService } from './shop-item.service';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    employees: Employee[] = [];

    constructor(
        private _router: Router,
        private _employeeService: EmployeeService,
        private _shopItemService: ShopItemService
    ) { }

    ngOnInit() {
        this._employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(0, 3));
    }

    gotoDetail(employee: Employee) {
        let link = ['EmployeeDetail', { id: employee.id }];
        this._router.navigate(link);
    }

}
