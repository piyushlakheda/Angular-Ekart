import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: {
    id: number,
    name: string,
    category: string,
    description: string
    size: number[],
    brand: string,
    gender: string,
    color: string[],
    price: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    discountPrice?: number,
    slug: string

  };
}
