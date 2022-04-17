import { ActionReducerMap } from "@ngrx/store";
import { BooksReducer } from "../reducers/book.reducer";
import { UserReducer } from "../reducers/user.reducer";
import { Book } from "./book.model";
import { User } from "./user.model";


export interface AppState{
    readonly books: Array<Book>;
    readonly userState: User;
}

export const reducers: ActionReducerMap<AppState> = {
    books: BooksReducer,
    userState: UserReducer
  };