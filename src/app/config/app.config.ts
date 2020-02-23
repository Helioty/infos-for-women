import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

    private darkMode: boolean = false;
    private fullScreen: boolean = false;

    constructor(private nativeStorage: NativeStorage) {

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

    public getMode(): boolean {
        return this.darkMode;
    }

    public setMode(estado: boolean) {
        this.darkMode = estado;
    }

    public getfullScreen(): boolean {
        return this.fullScreen;
    }

    public setfullScreen(estado: boolean) {
        this.fullScreen = estado;
    }

}
