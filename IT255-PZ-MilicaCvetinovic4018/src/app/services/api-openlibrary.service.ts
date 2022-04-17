import { HttpClient, HttpParams } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class ApiOpenlibraryService {

  private readonly BASE_URL = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  public getBooksByName(name: string): Observable<Array<Book>>{

    console.log("---------",name.split(" ").join("+"), "---------");
    return this.http.get(`${this.BASE_URL}/search.json?q=${name.split(" ").join("+")}`)
    .pipe(
      map((data: any) => data.docs.map((item: any) =>
      <Book>{ title: item.title, subjects: item.subject, author_name: item.author_name, isbn: item.isbn })),
      ); 
  } 

  
}
