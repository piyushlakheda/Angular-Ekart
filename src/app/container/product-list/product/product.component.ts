import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product:ProductModel;
}
