import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductModel } from 'src/app/features/products/models/product';
import { HasUnsavedChanges } from '../../models/has-unsaved-changes.interface';

@Component({
  selector: 'shp-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, HasUnsavedChanges {

  public product: ProductModel;

  public original: ProductModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.data.pipe(map(data => data.product)).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.original = { ...product };
    });
  }
  onSave(): void { }
  onBack(): void {
    this.location.back();
  }

  hasUnsavedChanges(): boolean {
    return JSON.stringify(this.product) === JSON.stringify(this.original);
  }
}
