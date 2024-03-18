import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent {
searchText: string ='';

updateSearchText(event: any){
  this.searchText=event.target.value; 
}
}
