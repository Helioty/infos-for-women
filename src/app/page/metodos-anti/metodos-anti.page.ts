import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MetodoAnti } from 'src/app/class/metodo-anti';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-metodos-anti',
  templateUrl: './metodos-anti.page.html',
  styleUrls: ['./metodos-anti.page.scss'],
})
export class MetodosAntiPage implements OnInit {

  public metodos: MetodoAnti[];

  constructor(
    private navControl: NavController,
    private http: HttpClient,
    public app: AppComponent) { }

  async ngOnInit() {
    this.http.get('assets/data/data.json').subscribe((result: JSON) => {
      this.metodos = result["dados"];
    });
  }

  async mostrarMetodo(metodo: MetodoAnti) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        dados: JSON.stringify(metodo)
      }
    };
    this.navControl.navigateForward(["/metodo-detalhe"], navigationExtras);
  }

}
