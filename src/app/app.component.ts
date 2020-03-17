import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  public darkMode = false;
  public fullScreen = false;

  constructor(
    private common: CommonService,
    private platform: Platform,
    private nativeStorage: NativeStorage,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.splashScreen.hide();

        if (this.nativeStorage.getItem('dados')) {
          this.nativeStorage.getItem('dados').then(data => {
            this.darkMode = data.modo;
            if (this.darkMode) {
              this.statusBar.backgroundColorByHexString('#E0115f');
            } else {
              this.statusBar.backgroundColorByHexString('#ffbfd3');
            }
          }, (error: any) => {
            console.log(error);
            this.statusBar.backgroundColorByHexString('#ffbfd3');
            this.nativeStorage.setItem('dados', { modo: this.darkMode, fs: this.fullScreen }).then(() => {
              console.log('Stored item!');
            },
              (error2: any) => { console.error('Error storing item', error2); }
            );
          }
          );
        }
      }
    });
  }

  async mudarModo() {
    if (this.platform.is('cordova')) {
      this.nativeStorage.setItem('dados', { modo: this.darkMode, fs: this.fullScreen })
        .then(() => {
          console.log('Stored item!');
          if (this.darkMode) {
            this.statusBar.backgroundColorByHexString('#E0115f');
          } else {
            this.statusBar.backgroundColorByHexString('#ffbfd3');
          }
        },
          error => console.error('Error storing item', error)
        );
    }
  }

  public exportFullScreen(): boolean {
    return this.fullScreen;
  }

}
