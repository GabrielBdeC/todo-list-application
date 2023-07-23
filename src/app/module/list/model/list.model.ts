import { Task } from './task.model';

export class List {
  public id!: string;
  public name: string;
  public taskItems!: Task[];
}
