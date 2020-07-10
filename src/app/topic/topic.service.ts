import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopicModel } from './Topic-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<Array<TopicModel>> {
    return this.http.get<Array<TopicModel>>('http://localhost:8080/api/Topic');
  }

  createTopic(TopicModel: TopicModel): Observable<TopicModel> {
    return this.http.post<TopicModel>('http://localhost:8080/api/Topic',
      TopicModel);
  }
}
