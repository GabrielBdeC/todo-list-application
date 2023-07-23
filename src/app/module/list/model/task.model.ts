import { List } from './list.model';

export class Task {
  public id!: string;
  public name: string;
  public done: boolean;
  public list: List;
}
