import { Component, OnInit } from '@angular/core';
import {QandsService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model: Object = {};
  constructor(
    private qandsservice :QandsService
  ) {}

  ngOnInit() {
  }

  onSubmitTemplateBased() {
    console.log(this.model);
    var qands=this.model;
    this.qandsservice.insertQands(qands).subscribe(
      value => {
        console.log("NN:"+JSON.stringify(value));
        alert("Data saved sucessfully")
      }
    )
}
}
