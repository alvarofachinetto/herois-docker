import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: string = 'success';
  @Input() message:string;
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onClose(){
    this.bsModalRef.hide();
  }

}
