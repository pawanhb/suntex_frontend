import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  headers : HttpHeaders;

  constructor(private http : HttpClient) {
    console.log(environment.apiURL); 
    this.headers = new HttpHeaders();
    this.headers.append('Accept',['application/json', 'text/plain', '*/*'])
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  sendEnquiry(req){
    return this.http.post(environment.apiURL +'/sendEmail', req);
  }
}
