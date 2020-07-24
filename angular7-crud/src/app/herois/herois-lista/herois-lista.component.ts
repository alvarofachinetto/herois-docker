import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Heroi } from 'src/app/model/heroi';
import { Observable, empty, Subject, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';

@Component({
  selector: 'app-herois',
  templateUrl: './herois-lista.component.html',
  styleUrls: ['./herois-lista.component.css']
})
export class HeroisListaComponent implements OnInit {

  constructor(
    private heroisService: HeroisService, 
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  heroi: Heroi;
  herois$: Observable<Heroi[]>;
  error$ = new Subject<boolean>();
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.herois$ = this.heroisService.list()
    .pipe(
      catchError(error => {
        this.alertService.showAlertDanger("Não foi possível carregar herois");
        return empty();
      })
    );  
  }

  editar(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  deletar(heroi){
    this.heroi = heroi;
    // const remove$ = this.alertService.showConfirm('Confirmação', 'Deseja realmente excluir o nosso herói ?');
    // remove$.asObservable()
    // .pipe(take(1),
    //   switchMap(result => result ? this.heroisService.delete(this.heroi.id): EMPTY)
    // )
    this.heroisService.delete(this.heroi.id)
    .subscribe(
      success => {
        this.listar();
      },
      () =>{
        this.alertService.showAlertDanger("Erro ao excluir o herói ufaaa!!");
      }
    )
  }

  // onConfirmDelete() {
  //   this.heroisService.delete(this.heroi.id)
  //   .subscribe(
  //     success => {
  //       this.listar();
  //       this.deleteModalRef.hide();
  //     },
  //     error => {
  //       this.alertService.showAlertDanger('Erro ao remover herói. Tente novamente mais tarde.');
  //       this.deleteModalRef.hide();
  //     }
  //   );
  // }

  // onDeclineDelete() {
  //   this.deleteModalRef.hide();
  // }




}
