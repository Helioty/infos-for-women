import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseService } from '../../../services/base-service.service';


@Component({
  selector: 'app-pedido-resumo',
  templateUrl: './pedido-resumo.page.html',
  styleUrls: ['./pedido-resumo.page.scss'],
})
export class PedidoResumoPage implements OnInit {

  public pedido: any;
  public showPedido: boolean = false;

  public pedidoItens: any;
  public showPedidoItens: boolean = false;

  public cartaoPedido: any;
  public docCliente: string = "";
  public docTipo: string = "";
  public endereco: any;

  constructor(
    public baseService: BaseService,
    public common: CommonService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.common.goToFullScreen();
    this.activatedRoute.queryParams.subscribe(params => {
      this.pedido = JSON.parse(params["pedido"]);
    });
    await this.separaDadosPedido();
    console.log(this.pedido)
  }

  ionViewDidEnter() {
    this.common.goToFullScreen();
  }

  async separaDadosPedido() {
    this.cartaoPedido = this.pedido.barCodecartaoPedido;
    if (this.pedido.cartaoPedido == 0) {
      this.cartaoPedido = "Sem Cartão";
    }
    if (this.pedido.cgccpf_cliente == null) {
      this.docCliente = ""; 
      this.docTipo = "Cliente não selecionado.";
    }
    else {
      this.docCliente = this.pedido.cgccpf_cliente;
      if (!this.docCliente) {
        this.docCliente = "Sem Cliente";
      }
      this.docTipo = this.docCliente.length > 12 ? "CNPJ do cliente:" : "CPF do cliente:";
    }
    this.showPedido = true;
  }


}
