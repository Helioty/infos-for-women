import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { AppComponent } from 'src/app/app.component';
import { ResumoMetodoAnti } from 'src/app/class/metodo-anti';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-metodos-anti',
  templateUrl: './metodos-anti.page.html',
  styleUrls: ['./metodos-anti.page.scss'],
})
export class MetodosAntiPage implements OnInit {

  public metodos: ResumoMetodoAnti[] = [
    { name: 'Hormonais', resu: '', tipo: 'T' },
    { name: 'Barreira', resu: '', tipo: 'T' },
    { name: 'Intrauterinos', resu: '', tipo: 'T' },
    { name: 'Naturais', resu: '', tipo: 'T' },
    { name: 'Duchas Vaginais', resu: '', tipo: 'T' },
    { name: 'Ligadura Tubária', resu: '', tipo: 'D' },
    { name: 'Vasectomina', resu: '', tipo: 'D' }
  ];

  constructor(
    private common: CommonService,
    private navControl: NavController,
    public app: AppComponent) { }

  ngOnInit() {

  }

  async mostrarMetodo(metodo: ResumoMetodoAnti) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        dados: JSON.stringify(metodo)
      }
    };
    this.navControl.navigateForward(["/metodo-detalhe"], navigationExtras);
  }

}
