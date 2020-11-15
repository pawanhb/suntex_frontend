import { Component, OnInit } from '@angular/core';
import { CommonservicesService } from '../../../services/commonservices.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private common : CommonservicesService) { }

  senderName = "";
  senderEmail = "";
  subject = "";
  emailText = "";
  message = "";
  emailsuccess = false;
  emailerror = false;
  ngOnInit(): void {
  }

  sendEnquiry(){
    var reqObject = {
      senderName : this.senderName,
      from : this.senderEmail,
      subject : this.subject,
      text : this.emailText
    };

    this.common.sendEnquiry(reqObject).subscribe((res:any)=>{
      if(res.status === 'success'){
        this.emailsuccess = true;
        this.emailerror = true;
        this.message = res.message;

        this.senderName = "";
        this.senderEmail = "";
        this.subject = "";
        this.emailText = "";
      } else {
        this.emailsuccess = false;
        this.emailerror = true;
        this.message = res.message;
        this.senderName = "";
        this.senderEmail = "";
        this.subject = "";
        this.emailText = "";
      }
    });
  }

}
