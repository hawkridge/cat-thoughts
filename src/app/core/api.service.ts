import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICatThought} from '../models/i-cat-thought';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getThoughts(): Observable<ICatThought[]> {
    return this.http.get<ICatThought[]>('/api/thoughts')
  }

}
