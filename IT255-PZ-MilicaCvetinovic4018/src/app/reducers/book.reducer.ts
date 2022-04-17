
import { BooksActionTypes } from "../actions/books.actions";
import { Book } from "../models/book.model";

const initialState : Array<Book> = [];


export function BooksReducer(state = initialState, action: any ): Array<Book>{
    switch(action.type){
        case BooksActionTypes.ADD_BOOK:
            return [...state,action.payload];
        case BooksActionTypes.REPLACE_BOOKS:
            return [...action.payload];
        default:
            return state;
    }
}