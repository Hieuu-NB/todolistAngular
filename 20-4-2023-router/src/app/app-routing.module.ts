import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompoent } from './Home/home.component';
import { ArticleDetailCompoent } from './article-detail/article-detail.component';

export const routes: Routes = [
  {path:"home",component:HomeCompoent },
  {path:"detail/:slug",component:ArticleDetailCompoent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
