import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'crud';
  
  employee: any;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message: string;

  constructor(public crudservice: CrudService){
  }

  ngOnInit() {
    this.crudservice.get_Allemployees().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['Name'],
          age: e.payload.doc.data()['Age'],
          address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.employee);

    });
  }

  CreateRecord(){
    // alert(" form is submitted")
    let Record = {};
    Record['Name'] = this.employeeName;
    Record['Age'] = this.employeeAge
    Record['Address'] = this.employeeAddress;

    this.crudservice.create_Newemployee(Record)
        .then(res => {
          this.employeeName = "";
          this.employeeAge = undefined;
          this.employeeAddress = "";
          console.log(res);
          this.message = "Employee data save done"
        }).catch(error => {
          console.log(error)
        });

  }
  EditRecord(Record){
    Record.isedit = true;
    Record.editname = Record.name;
    Record.editage = Record.age;
    Record.editaddress = Record.address;
  }
  Updatarecord(recorddata)
  {
    let record = {};
    record['Name'] = recorddata.editname;
    record['Age'] = recorddata.editage;
    record['Address'] = recorddata.editaddress;
    
    this.crudservice.update_employee(recorddata.id, record);
    recorddata.isedit = false;
  }

  Deleteemployee(record_id)
  {
    this.crudservice.delete_employee(record_id);
  }
 
}

