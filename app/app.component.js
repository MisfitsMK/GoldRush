System.register(['angular2/core', 'angular2/router', './dashboard.component', './employee.service', './employees.component', './employee-detail.component', './shop-item.service', './shop.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dashboard_component_1, employee_service_1, employees_component_1, employee_detail_component_1, shop_item_service_1, shop_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employees_component_1_1) {
                employees_component_1 = employees_component_1_1;
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
            },
            function (shop_item_service_1_1) {
                shop_item_service_1 = shop_item_service_1_1;
            },
            function (shop_component_1_1) {
                shop_component_1 = shop_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_employeeService, _shopItemService) {
                    this._employeeService = _employeeService;
                    this._shopItemService = _shopItemService;
                    this.title = 'Gold Rush';
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getEmployees();
                };
                AppComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this._employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
                };
                AppComponent.prototype.getShopItems = function () {
                    var _this = this;
                    this._shopItemService.getShopItems().then(function (shopItems) { return _this.shopItems = shopItems; });
                };
                AppComponent.prototype.onSelect = function (employee) {
                    this.selectedEmployee = employee;
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/employees',
                            name: 'Employees',
                            component: employees_component_1.EmployeesComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/shop',
                            name: 'Shop',
                            component: shop_component_1.ShopComponent
                        },
                        {
                            path: '/employee-detail/:id',
                            name: 'EmployeeDetail',
                            component: employee_detail_component_1.EmployeeDetailComponent
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            employees_component_1.EmployeesComponent,
                            employee_detail_component_1.EmployeeDetailComponent,
                            shop_component_1.ShopComponent
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            employee_service_1.EmployeeService,
                            shop_item_service_1.ShopItemService
                        ]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, shop_item_service_1.ShopItemService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map