import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent {
searchText: string ='';

updateSearchText(inputEL: HTMLInputElement){
  //this.searchText=event.target.value; 
  this.searchText=inputEL.value;
  this.searchTextChanged.emit(this.searchText);
}

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

// onSearchTextChanged(){
//   this.searchTextChanged.emit(this.searchText);
// }

}
