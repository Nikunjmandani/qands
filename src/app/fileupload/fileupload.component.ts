import { Component, OnInit } from '@angular/core';
import { QandsService } from '../services/index';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  model: Object = {};
  Qandsarrys: any;
 

  constructor(
    private qandsservice: QandsService
  ) {  }

  ngOnInit() {
  }


  onSubmitQuandS() {
    console.log(this.model);
    var qands = this.model;
    this.qandsservice.getQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        this.Qandsarrys = value.quands;
      }
    );

  }

  
 

  


}
