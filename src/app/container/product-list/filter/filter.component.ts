import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all: number;

  @Input()
  inStock: number;

  @Input()
  outStock: number;


}
