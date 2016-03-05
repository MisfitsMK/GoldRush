import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { ShopItem } from './shop-item'; 
import { ShopItemService } from './shop-item.service';
import { AppComponent } from './app.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    employees: Employee[] = [];
    gold: number = 0;
    clicks: number = 0;

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

    public panGold() {
        this.gold += Math.random() * 1 + .1;
        this.clicks += 1;
    }


}
