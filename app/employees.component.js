System.register(['angular2/core', 'angular2/router', './employee.service', './employee-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_service_1, employee_detail_component_1;
    var EmployeesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (employee_detail_component_1_1) {
                employee_detail_component_1 = employee_detail_component_1_1;
            }],
        execute: function() {
            EmployeesComponent = (function () {
                function EmployeesComponent(_router, _employeeService) {
                    this._router = _router;
                    this._employeeService = _employeeService;
                    this.title = 'Employee List';
                }
                EmployeesComponent.prototype.ngOnInit = function () {
                    this.getEmployees();
                };
                EmployeesComponent.prototype.getEmployees = function () {
                    var _this = this;
                    this._employeeService.getEmployees().then(function (employees) { return _this.employees = employees; });
                };
                EmployeesComponent.prototype.onSelect = function (employee) {
                    this.selectedEmployee = employee;
                };
                EmployeesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);
                };
                EmployeesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-employees',
                        templateUrl: 'app/employees.component.html',
                        styleUrls: ['app/employees.component.css'],
                        directives: [employee_detail_component_1.EmployeeDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService])
                ], EmployeesComponent);
                return EmployeesComponent;
            }());
            exports_1("EmployeesComponent", EmployeesComponent);
        }
    }
});
//# sourceMappingURL=employees.component.js.map