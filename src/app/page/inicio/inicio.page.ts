import { AppComponent } from './../../app.component';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private common: CommonService, public app: AppComponent, public data: DataService) { }

  ngOnInit() {

  }

  showVersion() {
    this.common.showVersion();
  }

  download() {
    this.data.openLocalPDF();
  }

}
