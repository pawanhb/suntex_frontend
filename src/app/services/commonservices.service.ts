import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  constructor(private http : HttpClient) { }

  sendEnquiry(req){
    return this.http.post('http://localhost:3002/sendMail', req);
  }
}
