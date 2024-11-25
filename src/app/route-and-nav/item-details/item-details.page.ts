import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonBackButton,
  IonLabel,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { GroceryService } from 'src/app/services/grocery/grocery.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonBackButton,
    IonIcon,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ItemDetailsPage implements OnInit {
  public location = inject(Location);
  private activateRoute = inject(ActivatedRoute);
  protected item: any;

  private grocerySer = inject(GroceryService);

  constructor() {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((res: any) => {
      if(res.id)
        this.showDetails(res.id);
    });
  }

  showDetails(id:number) {
    this.item = this.grocerySer.getItemById(id);

  }
}
