import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: './page/inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'direitos-repro',
    loadChildren: './page/direitos-repro/direitos-repro.module#DireitosReproPageModule'
  },
  {
    path: 'metodos-anti',
    loadChildren: './page/metodos-anti/metodos-anti.module#MetodosAntiPageModule'
  },
  {
    path: 'metodo-detalhe',
    loadChildren: './page/metodos-anti/metodo-detalhe/metodo-detalhe.module#MetodoDetalhePageModule'
  },
  { 
    path: 'lgbt', 
    loadChildren: './page/lgbt/lgbt.module#LGBTPageModule' 
  },
  {
    path: 'sobre',
    loadChildren: './page/sobre/sobre.module#SobrePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
