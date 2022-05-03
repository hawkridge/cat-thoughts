import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {ICatThought} from '../models/i-cat-thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  constructor(
    private apiSrv: ApiService
  ) { }

  getThoughtsList(): Observable<ICatThought[]> {
    return this.apiSrv.getThoughts()
  }
}
