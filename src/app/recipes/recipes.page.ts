import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipes.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id:'r1',
      title:'Schnitzel',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/A_Schnitzel_as_big_as_your_head.jpg/640px-A_Schnitzel_as_big_as_your_head.jpg',
      ingredient: ['French Fries', 'Pork Meat', 'Salade']
    },
    {
      id:'r2',
      title:'Lasagne',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Maya_Spaghetti_with_Shrimp_-_September_2022_-_Sarah_Stierch.jpg',
      ingredient: ['pates', 'Viandes Hachées', 'Sauce']
    },
]
  constructor() { }

  ngOnInit() {
  }

}
