import { Injectable } from '@angular/core';
import {EmpDrop} from '../Models/empDropDet';

@Injectable()
export class ServiceDropDown {

  constructor() { }

   empDroplist: Array<EmpDrop> = new Array<EmpDrop>();

  //get Emp list from array
  getEmpDropList(){

    return this.empDroplist =[
            { id: 1, emptitle: "Mr." },
            { id: 2, emptitle: "Mrs." }
        ]
  }

}
