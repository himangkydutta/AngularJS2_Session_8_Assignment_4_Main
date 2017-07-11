import { Injectable } from '@angular/core';
import {EmpDetails} from '../Models/empDetails';

@Injectable()
export class MyserviceService {

  constructor() { }

  emplist:EmpDetails[] =[];

  //get Emp list from array
  getEmp(){

    return this.emplist=[];
  }

  //Add values into array list
addEmpList(empListD:EmpDetails){
  this.emplist.unshift(empListD);
}

}
