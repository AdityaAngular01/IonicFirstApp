import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonBackButton,
  IonInput,
  IonList,
  IonTextarea,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from 'src/app/services/task/to-do-list.service';

@Component({
  selector: 'app-add-view-task',
  templateUrl: './add-view-task.page.html',
  styleUrls: ['./add-view-task.page.scss'],
  standalone: true,
  imports: [
    IonTextarea,
    IonList,
    IonInput,
    IonBackButton,
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonContent,
    IonButton,
    IonIcon,
    ReactiveFormsModule
  ],
})
export class AddViewTaskPage implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  protected taskForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private todoListSer = inject(ToDoListService);

  protected id!:number;

  constructor() {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.taskId;
      this.initTaskForm();
      if(this.id!==0)
        this.getTaskDetails(params.taskId-1);
    });
  }
  initTaskForm(){
    this.taskForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  updateValue(data: {title:string, description:string}){
    this.taskForm.patchValue(data);
  }

  onSubmit(){
    if(this.taskForm.invalid){
      this.taskForm.markAllAsTouched();
      return;
    }
    if(this.id==0){
      this.todoListSer.addTask(this.taskForm.value);
    }
    else{
      this.onUpdateTask(this.id-1);
    }
  }

  getTaskDetails(taskId:number){
    this.updateValue(this.todoListSer.getTaskByid(taskId));
  }

  isEq0(){
    return this.id==0;
  }

  onUpdateTask(id:number){
    this.todoListSer.updateTask(id, this.taskForm.value);
  }

}
