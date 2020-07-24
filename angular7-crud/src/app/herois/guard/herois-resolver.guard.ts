import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Heroi } from 'src/app/model/heroi';
import { HeroisService } from '../herois.service';

@Injectable({
  providedIn: 'root'
})
export class HeroisResolverGuard implements Resolve<Heroi> {
  constructor(private heroisService: HeroisService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Heroi>{
    if(route.params && route.params['id']){
      return this.heroisService.findById(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
      poder: null,
      rivalvilao: null
    });
  }
}
