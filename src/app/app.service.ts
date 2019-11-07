import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }



  getMethod(email){
    console.log("Request to get the details submitted..");
     return this.httpClient.get(`http://0.0.0.0:8080/records?email=${email}&length=1`);
  }

  postMethod(){
    console.log("Request to save details submitted");
   return this.httpClient.post('http://0.0.0.0:8080/records',
   {
      "start":"28.11.2016 08:00",
    "end" : "28.11.2016 09:00",
    "email" : "john.doe@gmail.com"
}
   
   
   );
  }
}
