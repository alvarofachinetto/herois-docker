import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel, FormGroup, FormBuilder} from '@angular/forms'
import { HeroisService } from '../herois.service';
import { Heroi } from 'src/app/model/heroi';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/shared/alert.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-herois-form',
  templateUrl: './herois-form.component.html',
  styleUrls: ['./herois-form.component.css']
})
export class HeroisFormComponent implements OnInit {
  
  constructor(
    private heroisService: HeroisService,
    private location: Location,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  heroi: Heroi;
  form: FormGroup;
  ngOnInit() {
      const heroi = this.route.snapshot.data['heroi'];
      
      this.form = this.fb.group({
        id: [heroi.id],
        nome: [heroi.nome],
        poder: [heroi.poder],
        rivalvilao: [heroi.rivalvilao]
      })
    
  }

  

  // buscaId(heroi){
  //     if(heroi.id != null){
  //       this.heroisService.findById(heroi.id)
  //         .subscribe(heroi => this.preencheFormulario(heroi));
  //     }
  // }

  // preencheFormulario(dados, formulario?:NgForm){
  //   console.log(formulario);
  //   formulario.form.patchValue({
  //     heroi: {
  //       nome: dados.nome,
  //       poder: dados.poder,
  //       rivalvilao: dados.rivalvilao
  //     }
  //   })
  // }

  onSubmit(form){
    this.heroi = form.value;
    let msgSuccess = "Heroi cadastrado com sucesso!";
    let msgError = "Erro ao cadastrar heroi";
    if(this.heroi.id){
      msgSuccess = 'Curso atualizado com sucesso!';
      msgError = 'Erro ao atualizar curso, tente novamente!';
    }
    this.heroisService.save(this.heroi)
    .subscribe(
      () => {
       this.alertService.showAlertSucess(msgSuccess);
       this.location.back();
      },
      () => {
        this.alertService.showAlertDanger(msgError);
      }
    )  
  }

}
