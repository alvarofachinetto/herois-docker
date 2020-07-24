import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertComponent } from './alert/alert.component';

enum TypeAlert{
  SUCCESS = 'success', DANGER = 'danger'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(message: string, type: TypeAlert, dimissTimeOut?: number){
    const modalRef = this.bsModalService.show(AlertComponent);
    modalRef.content.type = type;
    modalRef.content.message = message;

    if(dimissTimeOut){
      setTimeout(() => modalRef.hide(), dimissTimeOut);
    }
  }

  showAlertSucess(message: string){
    this.showAlert(message, TypeAlert.SUCCESS, 3000);
  }

  showAlertDanger(message: string){
    this.showAlert(message, TypeAlert.DANGER);
  }

  // showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
  //   const bsModalRef: BsModalRef = this.bsModalService.show(ConfirmComponent);
  //   bsModalRef.content.title = title;
  //   bsModalRef.content.msg = msg;
    
  //   if(okTxt){
  //     bsModalRef.content.okTxt = okTxt;
  //   }

  //   if(cancelTxt){
  //     bsModalRef.content.cancelTxt = cancelTxt;
  //   }

  //   return(<ConfirmComponent>bsModalRef.content).confirmResult;
  // }




}
