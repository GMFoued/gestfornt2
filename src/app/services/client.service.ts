import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

const baseUrl ='http://localhost:8080/api/clients'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Client[]>{
    return this.http.get<Client[]>(baseUrl);
  }
  get(id:any):Observable<Client>{
    return this.http.get<Client>('${baseUrl}/${id}');
    }
  create(data : any) : Observable<any>{
    return this.http.post(baseUrl,data);
  }

  update(id:any,data: any):Observable<any>{
    return this.http.put('${baseUrl}/${id}',data);
  }
  delete(id:any):Observable<any>{
    return this.http.delete('${baseUrl}/${id}');

  }
  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }

findByNom(nom:any):Observable<Client[]>{
  return this.http.get<Client[]>('${baseUrl}?nom=${nom}');
}
}
