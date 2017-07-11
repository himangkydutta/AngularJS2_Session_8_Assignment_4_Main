import {Component,Injectable} from '@angular/core';
import {EmpDetails} from './Models/empDetails';
import {EmpDrop} from './Models/empDropDet';
import {MyserviceService} from './Services/myservice.service';
import {ServiceDropDown} from './Services/myserviceDrop.service';
import {LoggingService} from './Services/logging.service';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html',
    providers:[MyserviceService]
})

export class EmployeeComponent{

    //two way binding of EmpDetails
    currentEmployee:EmpDetails = new EmpDetails();

    //Employee list
    empList :Array<MyserviceService> = new Array<MyserviceService>();
    //DropDown list
    empLstDrop :Array<ServiceDropDown> = new Array<ServiceDropDown>();

    constructor(private _serviceList:MyserviceService,private _servceLstDrop:ServiceDropDown,private _loggingService: LoggingService){
    }

    ngOnInit(){
        this.empList = this._serviceList.getEmp();
        this.empLstDrop = this._servceLstDrop.getEmpDropList();
        this._loggingService.info();
    }

    AddEmployee(){
        this._serviceList.addEmpList(this.currentEmployee);
        this.currentEmployee = new EmpDetails();
        this._loggingService.log(); // To add data
        this._loggingService.info(); // To retrive data
        this._loggingService.clear(); // To clear fields
    }
  
    
}