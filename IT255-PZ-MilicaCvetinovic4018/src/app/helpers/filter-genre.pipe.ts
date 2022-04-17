import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book.model';

@Pipe({
  name: 'filterGenre'
})
export class FilterGenrePipe implements PipeTransform {

  transform(books: any, genre: string): any {
    if (!books) return [];
    if (!genre) return books;
    return books.filter((books:any) => books.genres.includes(genre));
  }

}
