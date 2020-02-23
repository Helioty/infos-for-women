import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonItemSliding, AlertController, NavController, IonInfiniteScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { BaseService } from '../../../services/base-service.service';

import { PedidoListaPage } from '../pedido-lista.page';


@Component({
  selector: 'app-pedido-aberto',
  templateUrl: './pedido-aberto.page.html',
  styleUrls: ['./pedido-aberto.page.scss'],
})
export class PedidoAbertoPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  public resultGetPedidos: any;
  public pedidos: any[] = [];

  public showSkeleton: boolean = false;

  public paginaAtual: number = 1;
  public totalPagina: number = 0;

  constructor(
    public baseService: BaseService,
    public common: CommonService,
    private alertCtrl: AlertController,
    private navControl: NavController,
    private pedidoLista: PedidoListaPage,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    
  }

  ionViewDidEnter() {
    this.showSkeleton = true;
  }

  async doRefresh(event: any) {
    // try {
    //   this.paginaAtual = 1;
    //   await this.getPedidosEmAberto(this.paginaAtual).then(res => {
    //     event.target.complete();
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  async doInfinite(event: any) {
    // try {
    //   await this.getPedidosEmAberto(this.paginaAtual).then(res => {
    //     event.target.complete();

    //     if (this.paginaAtual >= this.totalPagina) {
    //       this.infiniteScroll.disabled = true;
    //     }
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  openSlide(itemSlide: IonItemSliding) {
    itemSlide.open('end');
  }

  closeSlide(itemSlide: IonItemSliding) {
    itemSlide.close()
  }


  verProdutosPedido(pedido: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        pedido: JSON.stringify(pedido)
      },
      skipLocationChange: true
    };
    this.navControl.navigateForward(["/pedido-resumo"], navigationExtras)
  }

}
