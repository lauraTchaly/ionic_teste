import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    canActivate: [Auth2Guard]
  },
  { path: 'logoff', 
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard] 
  },
  { path: 'lista-de-nutricionistas', loadChildren: './lista-de-nutricionistas/lista-de-nutricionistas.module#ListaDeNutricionistasPageModule' },
  { path: 'perfil-nutri', loadChildren: './perfil-nutri/perfil-nutri.module#PerfilNutriPageModule' },
  { path: 'chat-nutri', loadChildren: './chat-nutri/chat-nutri.module#ChatNutriPageModule' },
  { path: 'cadastroperfil', loadChildren: './cadastroperfil/cadastroperfil.module#CadastroperfilPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'perfil-view', loadChildren: './perfil-view/perfil-view.module#PerfilViewPageModule' },

  { path: 'instrucoes', loadChildren: './instrucoes/instrucoes.module#InstrucoesPageModule' },
  { path: 'ciencia', loadChildren: './ciencia/ciencia.module#CienciaPageModule' },
  { path: 'treino', loadChildren: './treino/treino.module#TreinoPageModule' },
  { path: 'treino-corpo-inteiro', loadChildren: './treino-corpo-inteiro/treino-corpo-inteiro.module#TreinoCorpoInteiroPageModule' },
  { path: 'corpo-inteiro', loadChildren: './corpo-inteiro/corpo-inteiro.module#CorpoInteiroPageModule' },
  { path: 'visualizar-treino', loadChildren: './visualizar-treino/visualizar-treino.module#VisualizarTreinoPageModule' },
  { path: 'abdomens-treino', loadChildren: './abdomens-treino/abdomens-treino.module#AbdomensTreinoPageModule' },
  { path: 'braco-treino', loadChildren: './braco-treino/braco-treino.module#BracoTreinoPageModule' },
  { path: 'perna-treino', loadChildren: './perna-treino/perna-treino.module#PernaTreinoPageModule' },
  { path: 'gluteos-treino', loadChildren: './gluteos-treino/gluteos-treino.module#GluteosTreinoPageModule' },
  { path: 'treino-corpo-inteiro-instrucao', loadChildren: './treino-corpo-inteiro-instrucao/treino-corpo-inteiro-instrucao.module#TreinoCorpoInteiroInstrucaoPageModule' },
  { path: 'abdomens-treino-instrucao', loadChildren: './abdomens-treino-instrucao/abdomens-treino-instrucao.module#AbdomensTreinoInstrucaoPageModule' },
  { path: 'braco-treino-instrucao', loadChildren: './braco-treino-instrucao/braco-treino-instrucao.module#BracoTreinoInstrucaoPageModule' },
  { path: 'perna-treino-instrucao', loadChildren: './perna-treino-instrucao/perna-treino-instrucao.module#PernaTreinoInstrucaoPageModule' },
  { path: 'gluteos-treino-instrucao', loadChildren: './gluteos-treino-instrucao/gluteos-treino-instrucao.module#GluteosTreinoInstrucaoPageModule' },
  { path: 'imc', loadChildren: './imc/imc.module#ImcPageModule' },

  { path: 'cadastro-de-prato', loadChildren: './cadastro-de-prato/cadastro-de-prato.module#CadastroDePratoPageModule' },
  { path: 'prato-view', loadChildren: './prato-view/prato-view.module#PratoViewPageModule' },
  { path: 'lista-de-pratos', loadChildren: './lista-de-pratos/lista-de-pratos.module#ListaDePratosPageModule' },

  { path: 'lista-de-pratos-vegano', loadChildren: './lista-de-pratos-vegano/lista-de-pratos-vegano.module#ListaDePratosVeganoPageModule' },
  { path: 'view-prato-vegano', loadChildren: './view-prato-vegano/view-prato-vegano.module#ViewPratoVeganoPageModule' },
  { path: 'cadastro-de-prato-vegano', loadChildren: './cadastro-de-prato-vegano/cadastro-de-prato-vegano.module#CadastroDePratoVeganoPageModule' },

  { path: 'lista-de-pratos-vegetariano', loadChildren: './lista-de-pratos-vegetariano/lista-de-pratos-vegetariano.module#ListaDePratosVegetarianoPageModule' },
  { path: 'view-prato-vegetariano', loadChildren: './view-prato-vegetariano/view-prato-vegetariano.module#ViewPratoVegetarianoPageModule' },
  { path: 'cadastro-de-prato-vegetariano', loadChildren: './cadastro-de-prato-vegetariano/cadastro-de-prato-vegetariano.module#CadastroDePratoVegetarianoPageModule' },

  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoPageModule' },

  { path: 'lista-de-promocoes', loadChildren: './lista-de-promocoes/lista-de-promocoes.module#ListaDePromocoesPageModule' },
  { path: 'view-promocao', loadChildren: './view-promocao/view-promocao.module#ViewPromocaoPageModule' },
  { path: 'cadastro-de-promocao', loadChildren: './cadastro-de-promocao/cadastro-de-promocao.module#CadastroDePromocaoPageModule' },

  { path: 'lista-de-parcerias', loadChildren: './lista-de-parcerias/lista-de-parcerias.module#ListaDeParceriasPageModule' },
  { path: 'view-parceria', loadChildren: './view-parceria/view-parceria.module#ViewParceriaPageModule' },
  { path: 'cadastro-de-parceiro', loadChildren: './cadastro-de-parceiro/cadastro-de-parceiro.module#CadastroDeParceiroPageModule' },

  { path: 'view-modal', loadChildren: './view-modal/view-modal.module#ViewModalPageModule' },
  { path: 'view-modal-vegano', loadChildren: './view-modal-vegano/view-modal-vegano.module#ViewModalVeganoPageModule' },
  { path: 'view-modal-vegetariano', loadChildren: './view-modal-vegetariano/view-modal-vegetariano.module#ViewModalVegetarianoPageModule' },
  { path: 'view-modal-promocoes', loadChildren: './view-modal-promocoes/view-modal-promocoes.module#ViewModalPromocoesPageModule' },

  { path: 'finalizar-compra', loadChildren: './finalizar-compra/finalizar-compra.module#FinalizarCompraPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
