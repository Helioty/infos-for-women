import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController, IonInfiniteScroll } from '@ionic/angular';

import { BaseService } from '../../../services/base-service.service';

import { PedidoListaPage } from '../pedido-lista.page';


@Component({
  selector: 'app-pedido-finalizado',
  templateUrl: './pedido-finalizado.page.html',
  styleUrls: ['./pedido-finalizado.page.scss'],
})
export class PedidoFinalizadoPage implements OnInit {

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


}
