import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {TodoComponent} from './components/todo/todo.component';
import {PostsComponent} from './components/posts/posts.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'posts', component: PostsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
