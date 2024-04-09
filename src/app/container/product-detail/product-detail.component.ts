import { Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/Models/ProductModel';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
 @Input() productListComp: ProductListComponent =undefined;

product: ProductModel;

 ngOnInit(){
  this.product=this.productListComp.selectedProduct;
 }
}
