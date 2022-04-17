import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { Book } from 'src/app/models/book.model';
import { ApiOpenlibraryService } from 'src/app/services/api-openlibrary.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input()
  page :string;
  genre: string = '';
  books$ : Observable<Array<Book>>
  genres : string[] = [];
  constructor(private store: Store<AppState>,
              private apiOpenlibraryService: ApiOpenlibraryService){}


  ngOnInit(): void {
    this.books$ = this.store.select(store => {
      this.genres = [];
      console.log("********", store.books);
      store?.books?.forEach(book=> {
        console.log("Subjects:")
        console.log(book?.subjects)
        if(book?.subjects){
          return this.genres.push(...book?.subjects);
        }else{
          return
        }
        } )
      this.genres = Array.from( new Set(this.genres));
      
      return store.books} ); 

  }
  onChangeGenre(event:any){
    console.log(event.target.value);
    this.genre = event.target.value;
  }
  

} 

