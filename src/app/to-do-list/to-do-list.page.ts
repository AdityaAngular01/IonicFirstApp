import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonListHeader,
  IonButton,
  IonItem,
  IonButtons,
  IonIcon,
  IonBackButton,
  IonText,
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToDoListService } from '../services/task/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
  standalone: true,
  imports: [
    IonText,
    IonItem,
    IonListHeader,
    IonLabel,
    IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
    IonButtons,
    IonIcon,
    IonButton,
  ],
})
export class ToDoListPage implements OnInit {
  protected allTasks: any;
  private todoListServ = inject(ToDoListService);

  constructor() {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.allTasks = this.todoListServ.getAllTasks();
  }
}
