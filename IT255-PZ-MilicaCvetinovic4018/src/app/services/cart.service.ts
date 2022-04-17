import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private items: Book[] = [];

  constructor() { }

  public addToCart(book: Book){
    this.items.push(book);
  }

  public getItems(): Book[]{
    return this.items;
  }

  public clearCart(): Book[]{
    this.items = [];
    return this.items;
  }
}
