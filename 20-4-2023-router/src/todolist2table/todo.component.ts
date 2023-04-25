import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'todo-list-2',
  template: `
  <input type="text" [(ngModel)]="x">
  <button (click)="addItem(x)">Add</button>

    <div class="wrapper">
      <div class="item">
        <h3>Work to do</h3>
        <div *ngFor="let item of arr1;index as id1" (click)="addId(this.id1)">{{item}}</div>
      </div>
      <div class="btn-mid">
        <button (click)="moveLeft(arrId)">To Left</button>
        <button (click)="moveRight(arrId)">To Right</button>
      </div>

      <div class="item">
      <h3>Doing</h3>
      <div *ngFor="let item of arr2;index as id2" (click)="addId(this.id2)">{{item}}</div>
      </div>
    </div>
  `,
  styleUrls:['./todo2.component.css']
})
export class toDoComponent2 implements OnInit{
  ngOnInit(): void {
  }
  x:any;
  arr1=["ăn cơm","rửa bát",4];
  arr2=["học bài",2,4];
  arrMid=[9999999];
  arrId=[9999999];
  addItem(x : any){
    this.arr1?.push(x);
  }
  // sự kiện lấy id các phần tử dc bấm
  addId(id : number){
    if(!this.arrId.includes(id)){
      this.arrId.push(id);
      console.log(this.arr1[id]);
      console.log(this.arrId);
      // (this.arrId[index])
      // this.arrId.slice(0,this.arrId.length);
    }
  }
  moveRight(arrId : any){

      // this.arrId.slice(1);
      console.log("do dai : "+this.arrId.length);

      for (let index = 1; index < arrId.length; index++) {
          console.log(arrId[index]);
          console.log(this.arr1[this.arrId[index]]);

          this.arr2.push(this.arr1[arrId[index]]);
          this.arr1?.splice(arrId[index],1);
      }
      // this.arrId=[];
  }
  moveLeft(arrId : any){
    this.arrId.slice(1,this.arrId.length);
    for (let index = 1; index < this.arrId.length; index++) {
        this.arr1.push(this.arr2[this.arrId[index]]);
        this.arr2?.splice(this.arrId[index],1);
    }
    // this.arrId=[];
}
}
