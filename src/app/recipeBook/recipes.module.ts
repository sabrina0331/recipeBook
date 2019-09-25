import { NgModule } from '@angular/core';

import { RecipeListComponent } from './recipeList/recipeList.component';
import { RecipeItemComponent } from './recipeList/recipeItem/recipeItem.component';
import { RecipeDetailComponent } from './recipeDetail/recipeDetail.component';
import { RecipeBookComponent } from './recipeBook.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ],
  // exports: [
  //   RecipeListComponent,
  //   RecipeItemComponent,
  //   RecipeDetailComponent,
  //   RecipeBookComponent,
  //   RecipeStartComponent,
  //   RecipeEditComponent,
  // ]
})
export class RecipesModule {}
