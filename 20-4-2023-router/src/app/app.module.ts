import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HomeCompoent } from './Home/home.component';
import { ArticleDetailCompoent } from './article-detail/article-detail.component';
import { HelloComponent } from 'src/todolist0/test.compoent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { toDoComponent } from './todolist1/todo.component';
import { toDoComponent2 } from 'src/todolist2table/todo.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,HomeCompoent,ArticleDetailCompoent,HelloComponent,toDoComponent,toDoComponent2, FormComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
