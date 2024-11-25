import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private items: any[] = [
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

  constructor() {}

  getItems(){
    return this.items;
  }

  getItemById(id: number){
    return this.items.find((item) => item.id == id);
  }
}
