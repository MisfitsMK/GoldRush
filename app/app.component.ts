import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from './dashboard.component';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import {ShopItem} from './shop-item';
import {ShopItemService} from './shop-item.service';
import {ShopComponent} from './shop.component';


@RouteConfig([

    {
        path: '/employees',
        name: 'Employees',
        component: EmployeesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/shop',
        name: 'Shop',
        component: ShopComponent
    },
    {
        path: '/employee-detail/:id',
        name: 'EmployeeDetail',
        component: EmployeeDetailComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        EmployeesComponent,
        EmployeeDetailComponent,
        ShopComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        EmployeeService,
        ShopItemService
    ]
})

export class AppComponent implements OnInit {

    title = 'Gold Rush';

    employees: Employee[];
    shopItems: ShopItem[];

    selectedEmployee: Employee;
    selectedItem: ShopItem;

    ngOnInit() {
        this.getEmployees();
        this.getPlayer();
    }

    constructor(
        private _employeeService: EmployeeService,
        private _shopItemService: ShopItemService
    ) { }

    getPlayer() {
        //You Go 
    }

    getEmployees() {
        this._employeeService.getEmployees().then(employees => this.employees = employees);
    }

    getShopItems() {
        this._shopItemService.getShopItems().then(shopItems => this.shopItems = shopItems);
    }

    onSelect(employee: Employee) {
        this.selectedEmployee = employee;
    }


}

