import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList/shopping-list.service';

import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();


  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Kung Pao Chicken',
  //     'Use sauce and chicken',
  //     'https://thewoksoflife.com/wp-content/uploads/2019/04/kung-pao-chicken-11.jpg',
  //     [
  //       new Ingredient('Chicken Leg', 1),
  //       new Ingredient('Sauce', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'Sichuan Boiling Fish',
  //     'Use sauce and hot oil pour on the fish',
  //     'https://thewoksoflife.com/wp-content/uploads/2017/02/sichuan-boiled-fish-6.jpg',
  //     [
  //       new Ingredient('Fish fillets', 2),
  //       new Ingredient('Sichuan Sauce', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Bai Zhuo Jie Lan ',
  //     'drain jielan, and put sauce on it',
  //     'http://thumb-so.sbar.com.cn/media/xiachufang/2012/07/25/5/50b620a458b6c87753285e77e42578ecb3910a44.jpg!560x350',
  //     [
  //       new Ingredient('Jie Lan', 10),
  //       new Ingredient('Soy Sauce', 1)
  //     ]
  //   )
  // ];
  private recipes: Recipe[] = [];

  constructor(
    private slService: ShoppingListService
  ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addInToShopList(ingredients: Ingredient []) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
