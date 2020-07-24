import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';
import { HeroisFormComponent } from './herois-form/herois-form.component';
import { HeroisResolverGuard } from './guard/herois-resolver.guard';

const routes: Routes = [
  {
    path: '', component: HeroisListaComponent
  },
  {
    path: 'novo', component: HeroisFormComponent,
    resolve: {
      heroi: HeroisResolverGuard
    }
  },
  {
    path: 'editar/:id', component: HeroisFormComponent,
    resolve: {
      heroi: HeroisResolverGuard
    }
  }

]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class HeroisRoutingModule { }
