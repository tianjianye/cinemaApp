import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'account-update',
    loadChildren: () => import('./pages/account-update/account-update.module').then( m => m.AccountUpdatePageModule)
  },
  {
    path: 'film/:id',
    loadChildren: () => import('./pages/film/film.module').then( m => m.FilmPageModule)
  },
  {
    path: 'group/:id',
    loadChildren: () => import('./pages/group/group.module').then( m => m.GroupPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
