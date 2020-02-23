import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { BaseService } from 'src/app/services/base-service.service';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.page.html',
  styleUrls: ['./pedido-lista.page.scss'],
})
export class PedidoListaPage implements OnInit {

  public totalEmAberto: number = 0;
  public totalFinalizados: number = 0;

  public disableButton: boolean = false;

  constructor(
    public common: CommonService,
    private menu: MenuController,
    private navControl: NavController,
    public baseService: BaseService,
    public platform: Platform,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.menu.enable(true);
    this.disableButton = false;
    this.common.goToFullScreen()
  }

  ionViewDidEnter() {
    this.common.goToFullScreen()
  }

}
