import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `
    <div class="wrapper">
      <h1 style="margin-left: 8%;">ToDo List</h1>
      <div class="box">
      <div class="box-1">
        <input class="input1" type="text" [(ngModel)]="x">
        <button (click)="addTask(x)">Add</button>
      </div>
      <div class="box-1" *ngFor="let item of arr; index as idx; count as total">
        <div>{{item}}</div>
        <div *ngIf="total==10">Full Task</div>
        <button (click)="update(fix,idx);this.hide=!this.hide">Sửa</button>
        <input *ngIf="hide"  class="input2" [(ngModel)]="fix" type="text">
        <button (click)="deleteTask(idx)">X</button>
      </div>
      </div>
    </div>
  `,
  styleUrls:['style.compoent.css']
})
export class HelloComponent {
  x!:string;
  fix!:string;
  hide=false;
  arr=[1,2,3,45,'2'];
  m!:number;
  addTask(value:any){
    if(value == null || value== ""){
      return;
  }
      this.arr.push(value);
      this.x="";
  }
  deleteTask(index:number){
      this.arr.splice(index,1);
  }
  update(fix:string,index:number){
    if(fix == null || fix== ""){
      return;
  }
      this.arr[index] = fix;
      this.m=index;
      console.log(this.m);
      console.log(123);

      this.fix="";
    }

}
