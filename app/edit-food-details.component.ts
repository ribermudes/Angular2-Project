import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <br>
  <div class="container">
  <h3> Edit Name: {{food.name}}</h3>
  <input [(ngModel)]="food.name" class="col-sm-4 food-form"/>
  </div>
  <div class="container">
  <h3> Edit Calories: {{food.calories}}</h3>
  <input type="number" [(ngModel)]="food.calories" class="col-sm-4 food-form"/>
  </div>
  <div class="container">
  <h3> Edit Details: {{food.details}}</h3>
  <input [(ngModel)]="food.details" class="col-sm-4 food-form"/>
  </div>
  `
})

export class EditFoodDetailsComponent {
  public food: Food;
  }
