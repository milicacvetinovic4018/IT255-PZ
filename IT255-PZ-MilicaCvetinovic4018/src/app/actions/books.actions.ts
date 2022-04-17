import { Action } from "@ngrx/store";
import { Book } from "../models/book.model";


export enum BooksActionTypes {
    ADD_BOOK = '[BOOKS] Add book',
    REPLACE_BOOKS = '[BOOKS] Replace books'
}

export class AddBookAction implements Action{
    readonly type = BooksActionTypes.ADD_BOOK;
    constructor(public payload: Book){}
}
export class ReplaceBooksAction implements Action{
    readonly type = BooksActionTypes.REPLACE_BOOKS;
    constructor(public payload: Book[]){}
}

export type BooksAction = AddBookAction | ReplaceBooksAction;