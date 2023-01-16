import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { 

  }

  getComments (): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(environment.uriBase + 'comments')
  }
}
