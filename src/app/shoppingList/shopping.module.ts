import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shoppingList.component';
import { ShoppingeditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingeditComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent }
    ]),
    SharedModule
  ],
  // providers: [LoggingService]
})

export class ShoppingModule {

}
