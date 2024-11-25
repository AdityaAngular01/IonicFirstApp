import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private tasks:any =JSON.parse(localStorage.getItem('tasks')!) || [];

  private tasks$ = new BehaviorSubject<any>([]);
  constructor() {}
  // private

  addToLocalStorage(taskArray:any){
    localStorage.setItem('tasks', JSON.stringify(taskArray));
  }
  addTask(task: { title: string; description: string }) {
    this.tasks.push(task);
    this.addToLocalStorage(this.tasks);
  }

  private getParsedTask(){
    return JSON.parse(localStorage.getItem('tasks')!);
  }

  getAllTasks(){
    return this.getParsedTask() || [];
  }

  getTaskByid(taskId:number){
    return this.getParsedTask()[taskId];
  }

  updateTask(id:number, updatedData:any){
    this.tasks[id] = updatedData;
    this.addToLocalStorage(this.tasks);
  }
}
