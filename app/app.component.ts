import {Component, OnInit, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Observable} from 'rxjs/Rx';
import {DashboardComponent} from './dashboard.component';
import {Player} from './player';
import {PlayerService} from './player.service';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailComponent} from './employee-detail.component';
import {ShopItem} from './shop-item';
import {ShopItemService} from './shop-item.service';
import {ShopComponent} from './shop.component';
import {AboutComponent} from './about.component';


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
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent
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
        ShopComponent,
        AboutComponent,
        DashboardComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        PlayerService,
        EmployeeService,
        ShopItemService
    ]
})

export class AppComponent implements OnInit {

    title = 'Gold Rush';

    ticks : number = 0;

    player: Player = {
        "gold": 0, "clicks": 0
    };

    //BONUSES
    goldBonus: number = 0;

    employees: Employee[];
    shopItems: ShopItem[];

    selectedEmployee: Employee;
    selectedItem: ShopItem;

    ngOnInit() {
        this.getEmployees();
        this.getPlayer();
        this.player.gold = 0;
        this.player.clicks = 0;

        let timer = Observable.timer(2000, 1000);   //starts after 2 seconds, ticks every second
        timer.subscribe(t => this.ticks = t);
    }

    tick() {
        console.log("TICK FUNCTION CALLED");
    }
    
    constructor(
        private _playerService: PlayerService,
        private _employeeService: EmployeeService,
        private _shopItemService: ShopItemService
    ) { }

    getPlayer() {
        this._playerService.getPlayer().then(player => this.player = player);
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

    panGold() {
        this.player.gold += 1 + this.goldBonus;
        this.player.clicks += 1;
    }

}