import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      `Lasagne`,
      `Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil`,
      `https://upload.wikimedia.org/wikipedia/commons/b/ba/Lasagne_-_stonesoup.jpg`
    ),
    new Recipe(
      `Lasagne`,
      `Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil`,
      `https://upload.wikimedia.org/wikipedia/commons/b/ba/Lasagne_-_stonesoup.jpg`
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
