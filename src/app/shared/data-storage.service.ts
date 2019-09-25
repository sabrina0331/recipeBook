import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipeBook/recipe.service';
import { Recipe } from '../recipeBook/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeServ: RecipeService,
    private authServ: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeServ.getRecipes();
    this.http.put('https://recipe-34b05.firebaseio.com/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-34b05.firebaseio.com/recipes.json'
      )
      .pipe(
        map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
        tap(recipes => {
          this.recipeServ.setRecipes(recipes);
          }
        )
      );
    }
}
