import React from "react"
import CommentArea from "./CommentArea"
import SingleBook from "./SingleBook"

export default function MainDisplay({ books, search, id, select }) {
  return (
    <div>
      <div className="d-inline-flex flex-wrap justify-content-center">
        {books
          .filter((book) => book.title.toLowerCase().includes(search))
          .map((book) => (
            <SingleBook
              key={book.asin}
              changeSelected={select}
              selectedBook={id}
              book={book}
            />
          ))}
      </div>
      <div>
        <CommentArea selectedBook={id} />
      </div>
    </div>
  )
}
