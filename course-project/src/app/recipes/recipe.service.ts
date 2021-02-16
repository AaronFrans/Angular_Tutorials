import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      `Lasagne`,
      `Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil`,
      `https://upload.wikimedia.org/wikipedia/commons/b/ba/Lasagne_-_stonesoup.jpg`,
      [
        new Ingredient('Pasta', 4),
        new Ingredient('Tomato Sauce', 2),
        new Ingredient('Cheese', 4),
      ]
    ),
    new Recipe(
      `Pizza`,
      `Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil`,
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Toppings', 4),
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Tomato Sauce', 1),
        new Ingredient('Cheese', 2),
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
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
