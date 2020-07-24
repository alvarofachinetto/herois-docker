
import { Injectable } from '@angular/core';
import { RepositoryService } from '../shared/repository.service';
import { Heroi } from '../model/heroi';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroisService extends RepositoryService<Heroi> {
  constructor(protected http: HttpClient) {
    super(http, `${environment.API_URL}herois`);
  }
 
}

