import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeService } from './services/recipe.service';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './categories/category.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CalculatorPipe } from './pipes/calculator.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CutDescriptionPipe } from './pipes/cut-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    RecipeComponent,
    FooterComponent,
    CategoryComponent,
    SearchComponent,
    FilterPipe,
    CalculatorPipe,
    NotFoundComponent,
    FormatDatePipe,
    RecipeListComponent,
    CutDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClickOutsideModule
  ],
  providers: [ RecipeService, Title ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
