import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { BaseService } from 'src/app/services/base-service.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pedido-retirada',
  templateUrl: './pedido-retirada.page.html',
  styleUrls: ['./pedido-retirada.page.scss'],
})
export class PedidoRetiradaPage implements OnInit {

  public disableButton: boolean = false;

  constructor(
    private menu: MenuController,
    private navControl: NavController,
    public baseService: BaseService,
    public platform: Platform,
  ) { }

  async ngOnInit() {

  }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.disableButton = false;
  }

  ionViewDidEnter() {
    
  }

}
