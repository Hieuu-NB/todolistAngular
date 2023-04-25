import { Component, OnInit } from '@angular/core';
import { Observable,  filter,  pluck, switchMap } from 'rxjs';
import { Article } from 'src/models/article';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'homes',
  template:`
      <ng-container *ngIf="article$|async as article;else noArticle">
        <h1>{{article.title}}</h1>
        <p>{{article.body}}</p>
      </ng-container>
      <ng-template #noArticle>No !!!</ng-template>
  `,
})
export class ArticleDetailCompoent implements OnInit {
  article$?: Observable<Article|undefined>;
  constructor(private readonly route: ActivatedRoute,private readonly articleService: ArticleService){}
  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug=>this.articleService.getArticle(slug)),
      filter(article => !!article)

    )

  }
}
