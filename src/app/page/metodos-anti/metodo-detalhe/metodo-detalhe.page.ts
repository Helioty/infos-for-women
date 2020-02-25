import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MetodoAnti, ResumoMetodoAnti } from 'src/app/class/metodo-anti';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-metodo-detalhe',
  templateUrl: './metodo-detalhe.page.html',
  styleUrls: ['./metodo-detalhe.page.scss'],
})
export class MetodoDetalhePage implements OnInit {

  public metodoEscolhido: ResumoMetodoAnti;
  public metodoName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    public app: AppComponent
  ) { }

  async ngOnInit() {
    await this.getDados().then((result: ResumoMetodoAnti) => {
      this.metodoEscolhido = result;
      this.metodoName = this.metodoEscolhido.name;
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

}
