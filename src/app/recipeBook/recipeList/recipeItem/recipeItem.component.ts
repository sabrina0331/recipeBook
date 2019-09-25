import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(

  ) {}


}
