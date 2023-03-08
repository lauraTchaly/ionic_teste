import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { FooterPage } from './footer.page';
import { FooterPage } from './footer.page';

const routes: Routes = [
  {
    path: '',
    component: FooterPage,
    children:[
      {
        path: 'home',
        loadChildren:() => import('../../page/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'sobre',
        loadChildren:() => import('../../page/sobre/sobre.module').then(m => m.SobrePageModule)
      },
      {
        path: 'contato',
        loadChildren:() => import('../../page/contato/contato.module').then(m => m.ContatoPageModule)
      },
      {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterPageRoutingModule {}
