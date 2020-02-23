import { Component } from '@angular/core';
import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from './services/common.service';
import { AppConfig } from './config/app.config';

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
    }
  ];

  private modoDark: boolean;

  constructor(
    private appConfig: AppConfig,
    private common: CommonService,
    private menu: MenuController,
    private platform: Platform,
    private navControl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#C40318');
      this.modoDark = this.appConfig.getMode();
    });
  }

  buttonAction(page: any) {
    switch (page.title) {
      case ("Logout"): {
        
      } break;

      default: {
        console.log("default of button Action!");
        this.navControl.navigateRoot([page.url]);
      }
    }
  }

  async mudarModo() {
    console.log(this.modoDark)
    // this.appConfig.setMode(!this.appConfig.getMode());
    // this.modoDark = this.appConfig.getMode();
  }

}
