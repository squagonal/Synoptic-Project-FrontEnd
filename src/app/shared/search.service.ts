import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './post-model';
import { Observable } from 'rxjs';
import { CreatePostPayload } from '../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getPostByKeyword(keyword: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('http://localhost:8080/api/search/' + keyword);
  }
}
