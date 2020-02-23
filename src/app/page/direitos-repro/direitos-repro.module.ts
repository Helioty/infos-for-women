import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DireitosReproPage } from './direitos-repro.page';

const routes: Routes = [
  {
    path: '',
    component: DireitosReproPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DireitosReproPage]
})
export class DireitosReproPageModule {}
