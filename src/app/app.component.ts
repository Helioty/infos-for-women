import { Component } from '@angular/core';
import { Platform, MenuController, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  public appPages = [
    {
      title: 'Pedidos',
      url: '/pedido-lista',
      icon: 'clipboard-outline'
    },
    {
      title: 'Consulta Cep',
      url: '/consulta-cep/consulta',
      icon: 'location-outline'
    },
    {
      title: 'Pedido Rapido',
      url: '/pedido-rapido',
      icon: 'speedometer-outline'
    },
    {
      title: 'New TMS',
      url: '/new-tms',
      icon: 'cube'
    },
    {
      title: 'Desempenho',
      url: '/indicador-vendedor',
      icon: 'stats-chart'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];


  public foto: any;

  public nome: any;

  public noPhoto: boolean = false;

  constructor(
    private authGuard: AuthGuard,
    private alertCtrl: AlertController,
    private common: CommonService,
    private menu: MenuController,
    private platform: Platform,
    private navControl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#C40318');
      // this.menu.enable(false);
    });
  }

  buttonAction(page: any) {
    switch (page.title) {
      case ("Logout"): {
        this.showAlertLogout();
      } break;

      default: {
        console.log("default of button Action!");
        this.navControl.navigateRoot([page.url]);
      }
    }
  }

  async showAlertLogout() {
    const alert = await this.alertCtrl.create({
      header: "Logout",
      subHeader: "Deseja sair?",
      buttons: ['NÃO', {
        text: 'SIM',
        handler: () => {
          this.authGuard.logged = false;
          this.navControl.navigateRoot(['login']);
        }
      }]
    });
    await alert.present();
  }


  getStatus(): any {

    if (localStorage.getItem("token")) {
      if (localStorage.getItem("foto")) {
        this.foto = localStorage.getItem("foto");
      }

      if (localStorage.getItem("nome")) {
        this.nome = localStorage.getItem("nome");
      }

      if (localStorage.getItem("foto") != 'null' && localStorage.getItem("foto") != undefined) {
        this.noPhoto = true;
      }

    }

  }

}

