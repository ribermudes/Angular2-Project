import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitFood'],
  template: `
  <div class="new-meal">
  <div class="container">
  <h3> Input Food:</h3>
  <input #newName class="col-sm-4 meal-form"/>
  </div>
  <div class="container">
  <h3> Input Calories:</h3>
  <input #newCalories type="number" min=2 class="col-sm-4 meal-form"/>
  </div>
  <div class="container">
  <h3> Input Details: </h3>
  <input #newDetails class="col-sm-4 meal-form"/>
  </div>
  </div>
  <div class="add-button">
  <button (click)="addFood(newName, newCalories, newDetails)" class="btn-success btn-lg add-button">Add Meal</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement){
    var FoodParameters: [userName.value, parseInt(userCalories.value), userDetails.value];
    this.onSubmitNewFood.emit(FoodParameters);
  }
}
