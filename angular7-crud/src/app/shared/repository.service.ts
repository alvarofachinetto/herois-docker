import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {delay, take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RepositoryService<T> {

  // private readonly API_URL = `${environment.API_URL_URL}`;

  constructor(protected http: HttpClient, private API_URL) { }

  list(){
    return this.http.get<T[]>(this.API_URL)
    .pipe(
      delay(3000)
    )
  }

  findById(id){
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1)); //take é do tipo mono ele somente trás uma requisição por vez
  }

  create(record: T){
    return this.http.post(`${this.API_URL}/heroi`, record).pipe(take(1));
  }

  update(record: T){
    return this.http.put(`${this.API_URL}/heroi/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    if (record['id']) {
      return this.update(record);
    }
    return this.create(record);
  }
  
  delete(id){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
