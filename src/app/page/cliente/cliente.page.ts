import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
import { IonInput, NavController } from '@ionic/angular';
import { BaseService } from 'src/app/services/base-service.service';
import { ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  @ViewChild("input", { static: false }) search: IonInput;

  // Valor digitado no input de CPF/CNPJ
  private valorDigitado: any = "";

  // Controle da animação do skeleton
  public skeletonAni: boolean = false;

  // Controle da cor do background // by Ryuge
  public isBlue: boolean = false;
  public isGreen: boolean = false;
  public isOrange: boolean = false;

  // Controle da pesquisa de CPF/CNPJ
  public isCNPJ: boolean = false;
  public atualizaCadastro: boolean = false;
  public novoCadastro: boolean = false;
  public mensagem: string = "";
  public isActive: string = "";

  // Dados do cliente.
  private dados: any;
  private dadosShow: any = { nome: "", endereco: "", celular: "", email: "" };

  constructor(
    private activatedRoute: ActivatedRoute,
    private common: CommonService,
    private baseService: BaseService,
    private navControl: NavController,
    private renderer: Renderer
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    
  }

  ionViewDidEnter() {
    
  }

  ionViewWillLeave() {

  }

  ionViewDidLeave() {

  }

  // by Hélio
  setCor(cor: string) {
    switch (cor) {
      case 'blue':
        this.isBlue = true;
        this.isGreen = false;
        this.isOrange = false;
        break;

      case 'green':
        this.isBlue = false;
        this.isGreen = true;
        this.isOrange = false;
        break;

      case 'orange':
        this.isBlue = false;
        this.isGreen = false;
        this.isOrange = true;
        break;

      default:
        break;
    }
  }

  // by Helio 08/10/2019
  // mascara dinamica
  dynamicMask(inputName: string) {
    if (this.valorDigitado.length > 2) {
      if (inputName == "cli") {
        if (this.valorDigitado != "" || this.valorDigitado != undefined) {
          this.valorDigitado = this.common.formataCPFNPJ(this.valorDigitado);
        }
      }
    }
  }

  async prosseguir() {
    let paginaSeguinte: any;
    this.activatedRoute.queryParams.subscribe(params => {
      paginaSeguinte = params["paginaSeguinte"];
    });
    switch (paginaSeguinte) {
      case 'back':
        this.navControl.pop();
        break;

      case 'produto-pesquisa':
        this.navControl.navigateRoot(["/produto-pesquisa"]);
        break;

      default:
        break;
    }
  }

}
