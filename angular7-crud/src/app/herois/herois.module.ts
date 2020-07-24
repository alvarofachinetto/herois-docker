import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroisRoutingModule } from './herois-routing.module';
import { HeroisListaComponent } from './herois-lista/herois-lista.component';
import { HeroisFormComponent } from './herois-form/herois-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroisListaComponent, HeroisFormComponent],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HeroisModule { }
