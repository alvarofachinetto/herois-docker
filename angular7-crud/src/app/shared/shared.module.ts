import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    ModalModule.forChild()
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
