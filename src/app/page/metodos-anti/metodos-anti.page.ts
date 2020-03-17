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
    this.http.get<JSON>('assets/data/data.json').subscribe((result: any) => {
      this.metodos = result.dados;
    });
  }

  async mostrarMetodo(metodo: MetodoAnti) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        dados: JSON.stringify(metodo)
      }
    };
    this.navControl.navigateForward(['/metodo-detalhe'], navigationExtras);
  }

}
