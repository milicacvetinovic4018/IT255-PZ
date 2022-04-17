import { Book } from "./book.model";

export interface User{
    username:string;
    password: string;
    list:Book[];
}