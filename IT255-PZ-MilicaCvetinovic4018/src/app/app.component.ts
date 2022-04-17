import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReplaceBooksAction } from './actions/books.actions';
import { AppState } from './models/app-state.model';
import { Book } from './models/book.model';
import { ApiOpenlibraryService } from './services/api-openlibrary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'it255-pz-MilicaCvetinovic4018';

  constructor(private store: Store<AppState>, private apiOpenlibraryService: ApiOpenlibraryService){

  }

  ngOnInit(): void {

  }



  

}
