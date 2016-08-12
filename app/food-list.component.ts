import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { NewFoodComponent } from './new-food.component';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],

  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
  <select (change)="onCategoryChange($event.target.value)" class="filter input-lg">
    <option value="all" selected="selected">Show All</option>
    <option value="high">High Calorie</option>
    <option value="low">Low Calorie</option>
  </select>
  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect:  EventEmitter<Food>;
  public filterCalories: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);
  }
  onChange(filterOptionByUserSelection) {
  this.filterCalories = filterOptionByUserSelection;
  }
}