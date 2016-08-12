import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div class="food">
      <div class="food-header">
        <h4 class="food-header-name">{{ food.name }}</h4>
      </div>
      <h5 class="food-details">Calories: <span class="h5-display">{{ food.calories }}</span></h5>
      <h5 class="food-details">Description:<br><span class="h5-display">{{ food.details }}</span></h5>
    </div>
 `
})

export class FoodComponent {
  public food: Food;

}
