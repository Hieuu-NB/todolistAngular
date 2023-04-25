import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { Article } from "src/models/article";

@Injectable({
  providedIn:'root'
})
export class ArticleService{
  constructor(){}
  // trả ra 1 mảng các obj
  get article$(){
    return of<Article[]>([
      {title:'Title 1',body:'Dinh Minh Hieu 1',slug:'title-1'},
      {title:'Title 2',body:'Dinh Minh Hieu 2',slug:'title-2'},
  ]);
  }
  // hàm có giá trị truyền vào là kiểu sring và có giá trị trả về là 1 Observable
  // hàm gọi mảng obj rồi lọc từ phần tử obj.slug và gán nó bằng giá trị truyền vào
  getArticle(slug: string): Observable<Article|undefined>{
      return this.article$.pipe(map(article => article.find(ar => ar.slug === slug)));
  }

}
