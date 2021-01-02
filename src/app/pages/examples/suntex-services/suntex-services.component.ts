import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suntex-services',
  templateUrl: './suntex-services.component.html',
  styleUrls: ['./suntex-services.component.scss']
})
export class SuntexServicesComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
