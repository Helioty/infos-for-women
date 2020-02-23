import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppConfig {

    private darkMode: boolean;
    private fullScreen: boolean;

    constructor() {

        if (this.darkMode) {


        } else {


        }

    }

    getMode(): boolean {
        return this.darkMode;
    }

    setMode(estado: boolean) {
        this.darkMode = estado;
    }

}
