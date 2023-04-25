import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'todo-list',
  template: `
  <div>
    <input type="text" [(ngModel)]="x">
    <button (click)="addItem(x)">Add</button>
    <div class="list" *ngFor="let item of arr;index as id">
      {{item}}
      <button (click)="remove(id)">X</button>
    </div>

  </div>
  `,
  styleUrls:['./styleTodo.component.css']
})
export class toDoComponent implements OnInit{
  ngOnInit(): void {  }
  constructor(){}

  x:any;

  arr=[1,2,3];

  remove(id:number){
      this.arr.splice(id,1);
  }

  addItem(x : any){
    if(x){
      this.arr.push(x);
    }
    this.x='';


    }
}
