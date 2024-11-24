import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleSharp, arrowUpCircleSharp, createOutline, createSharp, saveOutline, saveSharp } from 'ionicons/icons';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    this.addAllIcons();
  }

  addAllIcons(){
    addIcons({
      saveSharp,
      saveOutline,
      addCircleSharp,
      arrowUpCircleSharp,
      createOutline,
      createSharp
    })
  }
}
