import { Component } from 'angular2/core';
import { Object } from './object.model';


@Component({
  selector: 'my-app',
  template: `
    <h1>testing</h1>
  `
})

export class AppComponent {
  public objects: Object[];
  constructor() {
    this.objects = [
      new Object("Object1", 0),
      new Object("Object2", 1),
      new Object("Object3", 2),
      new Object("Object4", 3)
    ]
  }
}
