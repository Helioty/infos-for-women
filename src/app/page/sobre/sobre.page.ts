import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(private common: CommonService, public app: AppComponent) { }

  ngOnInit() {

  }

}
