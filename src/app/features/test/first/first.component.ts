import { Component, OnInit } from '@angular/core';
import { CategoryType } from '../../products/models/category-type';

@Component({
  selector: 'shp-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  name: string;

  description: string;

  price: number;

  category: CategoryType;

  isAvailable: boolean;

  modifiedBy: string[];


  constructor() { }

  ngOnInit(): void {
    this.name = 'Test name';
    this.description = 'The best thing you could ever buy.';
    this.price = 542.99;
    this.category = CategoryType.Car;
    this.isAvailable = false;
    this.modifiedBy = ['Author', 'Editor', 'Admin', 'IT spec'];
  }
}
