import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MetodosAntiPage } from './metodos-anti.page';

const routes: Routes = [
  {
    path: '',
    component: MetodosAntiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MetodosAntiPage]
})
export class MetodosAntiPageModule {}
