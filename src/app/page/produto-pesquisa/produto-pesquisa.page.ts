import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.page.html',
  styleUrls: ['./produto-pesquisa.page.scss'],
})
export class ProdutoPesquisaPage implements OnInit {

  public taskScanner: any;
  public valorScanner: string;
  public focusStatus: boolean = true;

  constructor(
    private common: CommonService,
    private navControl: NavController
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.common.goToFullScreen();
  }

  ionViewDidEnter() {
    this.common.goToFullScreen();
  }

  ionViewWillLeave() {
    
  }

  ionViewDidLeave() {

  }


  async openClientePage() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        paginaSeguinte: 'back',
        paginaAnterior: 'produto-pesquisa'
      }
    };
    this.navControl.navigateForward(["/cliente"], navigationExtras);
  }

}
