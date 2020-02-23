import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

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
    path: 'login',
    loadChildren: './page/login/login.module#LoginPageModule'
  },
  {
    path: 'pedido-lista',
    loadChildren: () => import('./page/pedido-lista/pedido-lista.module').then(m => m.PedidoListaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pedido-resumo',
    loadChildren: './page/pedido-lista/pedido-resumo/pedido-resumo.module#PedidoResumoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'pedido-retirada',
    loadChildren: './page/pedido-retirada/pedido-retirada.module#PedidoRetiradaPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'pedido-rapido',
    loadChildren: './page/pedido-rapido/pedido-rapido.module#PedidoRapidoPageModule'
  },
  {
    path: 'produto-pesquisa',
    loadChildren: './page/produto-pesquisa/produto-pesquisa.module#ProdutoPesquisaPageModule'
  },
  {
    path: 'new-tms',
    loadChildren: './page/new-tms/new-tms.module#NewTMSPageModule'
  },
  {
    path: 'indicador-vendedor',
    loadChildren: './page/indicador-vendedor/indicador-vendedor.module#IndicadorVendedorPageModule'
  },
  {
    path: 'cliente',
    loadChildren: './page/cliente/cliente.module#ClientePageModule'
  },
  {
    path: 'cliente-cadastro-edicao',
    loadChildren: './page/cliente/cliente-cadastro-edicao/cliente-cadastro-edicao.module#ClienteCadastroEdicaoPageModule'
  },
  {
    path: 'tinta-alterada',
    loadChildren: './page/tinta-alterada/tinta-alterada.module#TintaAlteradaPageModule'
  },
  {
    path: 'lista-tintas',
    loadChildren: './page/tinta-alterada/lista-tintas/lista-tintas.module#ListaTintasPageModule'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
