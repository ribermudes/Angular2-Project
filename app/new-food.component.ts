import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
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
  <button (click)="addFood(newName, newCalories, newDetails)" class="btn-success btn-lg add-button">Add Food</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;

  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }

  addFood(newFoodNameInput: HTMLInputElement, newFoodCaloriesInput: HTMLInputElement, newFoodDetailsInput: HTMLInputElement, ) {
    var newFood = new Food(newFoodNameInput.value, parseInt(newFoodCaloriesInput.value), newFoodDetailsInput.value,  0);
    console.log(newFood);
    this.onSubmitNewFood.emit(newFood);
    newFoodNameInput.value = "";
    newFoodCaloriesInput.value = "";
    newFoodDetailsInput.value = "";
  }
}
