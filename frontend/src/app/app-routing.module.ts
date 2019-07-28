import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './categories/category.component';
import { RecipeComponent } from './recipes/recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'recipes/:name', component: RecipeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
