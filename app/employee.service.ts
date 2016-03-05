import {Employee} from './employee';
import {EMPLOYEES} from './mock-employees';
import {Injectable} from 'angular2/core';


@Injectable()
export class EmployeeService {

    getEmployees() {
        return Promise.resolve(EMPLOYEES);
    }
    getEmployeesSlowly() {
        return new Promise<Employee[]>(resolve => setTimeout(() => resolve(EMPLOYEES), 2000));
    }

    getEmployee(id: number) {
        return Promise.resolve(EMPLOYEES).then(
            employees => employees.filter(employee => employee.id === id)[0]
        );
    }
}
