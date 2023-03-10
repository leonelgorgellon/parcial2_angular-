import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {

  }

  getPostsByUser(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.uriBase + 'posts');
  }
}
