import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(foodList: Food[], args) {
    var userDropDownSelection = args[0];
    if (userDropDownSelection === 'low'){
      return foodList.filter((food) =>{
        return food.calories <= 500;
      });
    } else if (userDropDownSelection === 'high'){
        return foodList.filter((food) =>{
          return food.calories > 500;
      });
    } else {
      return foodList;
    }
  }
}
