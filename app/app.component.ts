import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';


@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
  <div class="container">
    <h1>Nutrition Tracker</h1>
      <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)">
      </food-list>
      </div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Big Bowl", 475, "vegan", 0),
      new Food( "Acai Bowl", 385, "none", 1),
      new Food("Chipotle Burrito", 1000, "no cheese", 2),
      new Food("Cookie Dough Ice Cream", 810, "just shame", 3)
    ]
  }
  foodWasSelected(clickedFood: Food): void {

  }
}
