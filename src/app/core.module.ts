import { NgModule } from '@angular/core';
import { RecipeService } from './recipeBook/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShoppingListService } from './shoppingList/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';


@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ]
})
export class CoreModule {}
