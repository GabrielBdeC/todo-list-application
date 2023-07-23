import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { List } from '../model/list.model';

@Injectable()
export class ListService {
  protected url = 'http://localhost:3000/api/v1/list';

  constructor(protected http: HttpClient) {}

  public getAll(): Observable<List[]> {
    return this.http.get<List[]>(this.url);
  }

  public getOne(id: string): Observable<List> {
    return this.http.get<List>(`${this.url}/${id}`);
  }

  public create(list: List): Observable<List> {
    return this.http.post<List>(this.url, list);
  }

  public update(list: List): Observable<List> {
    return this.http.put<List>(`${this.url}/${list.id}`, list);
  }

  public remove(id: string): Observable<List> {
    return this.http.delete<List>(`${this.url}/${id}`);
  }
}
