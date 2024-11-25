import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonLabel,
  IonListHeader,
  IonButton,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { GroceryService } from '../services/grocery/grocery.service';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-route-and-nav',
  templateUrl: './route-and-nav.page.html',
  styleUrls: ['./route-and-nav.page.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonList,
    IonButton,
    IonListHeader,
    IonLabel,
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class RouteAndNavPage implements OnInit {
  private router = inject(Router);
  private groceryServ = inject(GroceryService)
  protected items: any[] = [];
  image:string | undefined;

  constructor(private title: Title) {
    title.setTitle('Route And Nav Example');
  }

  ngOnInit(): void {
    this.items = this.groceryServ.getItems();
  }

  onViewItem(item: any) {
    console.log(item);
  }

  navigateToDetails() {
    this.router.navigateByUrl('item-details');
  }

  async uploadImage(){
     try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Uri,
      });
      console.log(image);

      this.image = image.webPath;


     } catch (error) {

     }
  }
}
