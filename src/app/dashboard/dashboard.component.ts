import { Component, OnInit } from '@angular/core';
import { QandsService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model: Object = {};
  Qandsarrys: any;

  constructor(
    private qandsservice: QandsService
  ) {
    this.ongetQandS();
  }

  ngOnInit() {
  }


  ongetQandS() {
    console.log(this.model);
    var qands = this.model;
    this.qandsservice.getQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        this.Qandsarrys = value.quands;
      }
    );

  }

  onSubmitQuandS() {
    console.log(this.model);
    var qands = this.model;
    this.qandsservice.insertQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        alert("Data saved sucessfully");
      }
    );
    // this.myform.clear();
    this.ongetQandS();
  }
  
  onupdateQandS(){
    
  }

  ondeleteQandS(question:any){
    console.log(question);
    var qands =question;
    this.qandsservice.deleteQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        alert("Data saved sucessfully");
      }
    );
    this.ongetQandS();
  }

  
}
