import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private idChangeSub: Subscription;

  constructor(
    private shoppinglistService: ShoppingListService
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.idChangeSub = this.shoppinglistService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );

  }

  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }


  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

}
