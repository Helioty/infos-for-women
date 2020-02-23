import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

    private darkMode: boolean = false;
    private fullScreen: boolean = false;

    constructor() {

        if (this.darkMode) {


        } else {


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
