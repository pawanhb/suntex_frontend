import { Component, OnInit } from '@angular/core';
import { CommonservicesService } from '../../../services/commonservices.service';
import { EmailDetails } from 'src/app/Model/email-details';

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
  inputError = false;
  emailsuccess = false;
  emailerror = false;
  isCollapsed = true;
  mobile = false;
  showSpinner = false;
  mobileNo = "";
  company = "";

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.mobile = (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini|Opera Mobi/i.test(navigator.userAgent)) ? true : false;
  }

  sendEnquiry(){
    let regex =/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;    
    let validMobileRegex =/^(\+[\d]{1,5}|0)?[3-9]\d{9}$/g;
    this.inputError = false;
    this.emailerror = false;
    this.emailsuccess = false;

    if( this.senderName === "" || this.senderEmail  === "" || this.subject  === "" || this.emailText === "" || this.mobileNo === "" || this.company === ""){
      this.inputError = true;
      this.message = "All input fields are mandatory, please enter missing values";
      return;
    } else if ( ! validMobileRegex.test(this.mobileNo) ){
      this.inputError = true;
      this.message = "Invalid Mobile";
      return;
    } else if (! regex.test(this.senderEmail) ){
      this.inputError = true;
      this.message = "Invalid email";
      return;
    }

    // var email = new EmailDetails();
    // email.from = this.senderEmail;
    // email.senderName = this.senderEmail;
    // email.subject = this.subject;
    // email.text = this.emailText; 
    var req = {
      "senderName" : this.senderName,
      "from" : this.senderEmail,
      "subject" : this.subject,
      "text" : this.emailText,
      "mobileNo":this.mobileNo
    };

    //var reqObject = JSON.stringify(req);

    this.showSpinner = true; 
    this.common.sendEnquiry(req).subscribe((res:any)=>{
      if(res.statusCode === 'success'){
        this.emailsuccess = true;
        this.emailerror = false;
        this.message = res.responseMessage;

        this.senderName = "";
        this.senderEmail = "";
        this.subject = "";
        this.emailText = "";
        this.mobileNo = "";
        this.company = "";
      } else {
        this.emailsuccess = false;
        this.emailerror = true;
        this.message = res.responseMessage;
        this.senderName = "";
        this.senderEmail = "";
        this.subject = "";
        this.emailText = "";
        this.mobileNo = "";
        this.company = "";
      }
      this.showSpinner = false;
    }, (error)=>{
      console.log("Error response received");
      this.emailerror = true;
      this.message = "Error in sending email, please try again later";
      this.showSpinner = false;
    });
  }

  closeNotification(){
    this.inputError = false;
    this.emailerror = false;
    this.emailsuccess = false;
  }

}
