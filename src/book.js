import React from "react";

function Book(props) {
  //to avoid redundancy in setting up the book component props can be called out, while specifying exact properties of prop needed(by destructuring) like below
  const { img, title, author, id } = props.book;
  //the above is used to "destructure" the props and allow specific properties of the props to be used freely
  //another way to do it is " const Book=({img,id,author,id})=>{...} to read everything from the Book object"

  //return a single book component made up of 5 other component
  function clickHandler(e) {
    console.log(e.target);
    // alert("hello");
  }

  return (
    <article className="book">
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{id}</p>
      {/* what is passed into the onClick function allows it to only run when it is called instead of as the page renders */}
      <button type="button" onClick={() => clickHandler(id)}>
        Click Me!
      </button>
    </article>
  );
}
 
export default Book;
