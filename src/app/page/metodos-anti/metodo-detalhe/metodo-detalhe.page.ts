import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetodoAnti } from 'src/app/class/metodo-anti';
import { AppComponent } from 'src/app/app.component';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-metodo-detalhe',
  templateUrl: './metodo-detalhe.page.html',
  styleUrls: ['./metodo-detalhe.page.scss'],
})
export class MetodoDetalhePage implements OnInit {

  @ViewChild(IonSlides, { static: true }) slide: IonSlides;

  public metodoEscolhido: MetodoAnti;
  public metodoName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public app: AppComponent
  ) { }

  async ngOnInit() {
    this.slide.lockSwipes(true);
    await this.getDados().then((result: MetodoAnti) => {
      this.metodoEscolhido = result;
      this.metodoName = this.metodoEscolhido.name;
      if (this.metodoEscolhido.tipo == "D") {
        this.changeSlide(1);
      }
      console.log(this.metodoEscolhido);
    });
  }

  getDados(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.activatedRoute.queryParams.subscribe(params => {
        resolve(JSON.parse(params['dados']));
      }, (error) => {
        reject(error);
      });
    });
  }

  changeSlide(index: number) {
    this.slide.lockSwipes(false);
    this.slide.slideTo(index);
    this.slide.lockSwipes(true);
  }
  
}
