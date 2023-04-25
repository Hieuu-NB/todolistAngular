import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/models/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'home',
  template:`
      <p>home work !</p>
      <ul>
        <li *ngFor="let item of article$|async" style="padding: 20px;border: 1px solid red;">
          {{item.title}}

          <br>

          <a [routerLink]="['/detail',item.slug]">Read more</a>
        </li>
      </ul>
  `,
})
export class HomeCompoent implements OnInit {
  article$?: Observable<Article[]>;

  constructor(private readonly articleService:ArticleService){}
    // khi khởi tạo tạo ra 1 mảng lấy từ bên khác truyền vào
    ngOnInit(): void {
      this.article$ = this.articleService.article$;
    }
}
