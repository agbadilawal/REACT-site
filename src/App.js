import React from "react";
import { books } from "./books";
import Book from './book';

//this return list of book components in a list
//object cant be rendered as it is so it is further destructured as "const {img,title,author}=book;"
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
        //can also be made to return book not as an object by spreading book property using "{...book} instead of book={book}" that way book is referred to in the booklist function directly without targeting as an object
      })}
    </section>
  );
}
//-----------------------------------------------

//returns specific values of elements different for each book with a unique id
//returns a single component book

//-----------------------------------------------

export default Booklist;
