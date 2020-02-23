import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  private darkMode: boolean = false;
  private fullScreen: boolean = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      if (this.platform.is("cordova")) {
        this.splashScreen.hide();
        this.statusBar.backgroundColorByHexString('#C40318');

        if (this.nativeStorage.getItem('dados')) {
          this.nativeStorage.getItem('dados').then(
            data => {
              console.log(data);
              this.darkMode = data.modo;
            },
            error => console.error(error)
          );
        } else {
          this.nativeStorage.setItem('dados', { modo: this.darkMode, fs: this.fullScreen })
            .then(() => {
              console.log('Stored item!');

            },
              error => console.error('Error storing item', error)
            );
        }
      }
    });
  }

  async mudarModo() {
    if (this.platform.is("cordova")) {
      this.nativeStorage.setItem('dados', { modo: this.darkMode, fs: this.fullScreen })
        .then(() => {
          console.log('Stored item!');
        },
          error => console.error('Error storing item', error)
        );
    }
  }

  public exportFullScreen(): boolean {
    return this.fullScreen;
  }

}
