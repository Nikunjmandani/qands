import { Injectable } from '@angular/core';
import {Http ,Headers, RequestOptions,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";


@Injectable()
export class QandsService{

    constructor(public http:Http){
        console.log('in qands');
    }
    public insertQands(qands:any){
        console.log("inside insert qands");
        var link ='http://localhost:3001/insertTheQands';
        var data= JSON.stringify(qands);
        let headers =new Headers({'Content-Type':'application/json'});// sets content type to JSON
        let options =new RequestOptions({headers:headers});// creates a requeest options
        var result =this.http
                        .post(link,data,options)
                        .map((r:Response) => r.json());
        return result;                
    }

    /// can add maores service calls
}