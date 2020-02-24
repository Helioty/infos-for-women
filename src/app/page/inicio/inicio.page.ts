import { AppComponent } from './../../app.component';
import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private common: CommonService, public app: AppComponent) { }

  ngOnInit() {

  }

  showVersion() {
    this.common.showVersion();
  }

}
