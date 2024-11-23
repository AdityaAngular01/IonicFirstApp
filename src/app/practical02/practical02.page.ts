import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonText,
  IonListHeader,
  IonList,
  IonButton,
  IonItem,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-practical02',
  templateUrl: './practical02.page.html',
  styleUrls: ['./practical02.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonButton,
    IonList,
    IonListHeader,
    IonLabel,
    IonCol,
    IonRow,
    IonGrid,
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonText,
  ],
})
export class Practical02Page {
  constructor() {}

  items: any[] = [
    {
      id: 1,
      name: 'Tomato',
      description: 'You get a ripe tomato',
    },
    {
      id: 2,
      name: 'Apple',
      description: 'A juicy red apple, fresh and crisp',
    },
    {
      id: 3,
      name: 'Banana',
      description: 'A perfectly ripe banana, ready to eat',
    },
    {
      id: 4,
      name: 'Carrot',
      description: 'A crunchy orange carrot, freshly harvested',
    },
    {
      id: 5,
      name: 'Potato',
      description: 'A starchy brown potato, great for cooking',
    },
    {
      id: 6,
      name: 'Cucumber',
      description: 'A refreshing green cucumber, cool and crisp',
    },
    {
      id: 7,
      name: 'Strawberry',
      description: 'A sweet and tangy strawberry, vibrant and red',
    },
  ];
}
