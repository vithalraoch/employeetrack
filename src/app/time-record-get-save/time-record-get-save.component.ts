import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

import { ApiService } from '../app.service';



@Component({
  selector: 'app-time-record-get-save',
  templateUrl: './time-record-get-save.component.html',
  styleUrls: ['./time-record-get-save.component.css']
})
export class TimeRecordGetSaveComponent {
  @ViewChild('emailval', {static: true}) emailval:ElementRef;
  result;
constructor(
  
  private apiService: ApiService,
  
  ){}

getDetails(){
  this.result=""
  console.log('player name: ', this.emailval.nativeElement.value);
  this.apiService.getMethod(this.emailval.nativeElement.value).subscribe((data)=>{
      console.log(data[0]);
      if(data[0]!=null){
        this.result=JSON.stringify(data);
      }
      
    });;
}
postDetails() {
  this.apiService.postMethod().subscribe((data)=>{
      console.log("POST Request is successful ", data);
      
    });;
}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/