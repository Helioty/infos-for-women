import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-direitos-repro',
  templateUrl: './direitos-repro.page.html',
  styleUrls: ['./direitos-repro.page.scss'],
})
export class DireitosReproPage implements OnInit {

  constructor(public app: AppComponent, public data: DataService) { }

  ngOnInit() { }

}
