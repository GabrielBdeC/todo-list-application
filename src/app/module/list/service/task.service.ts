import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../model/task.model';

@Injectable()
export class TaskService {
  protected url = 'http://localhost:3000/api/v1/task';

  constructor(protected http: HttpClient) {}

  public getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  public getOne(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  public create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  public update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${task.id}`, task);
  }

  public remove(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }
}
