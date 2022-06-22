import React, { useState } from 'react'
import { BooksContext } from '../contexts/BooksContext.jsx'; 


export function MyList(props) {
    const { booksList } = React.useContext(BooksContext);
console.log(booksList)
    return (
    <div className="innerbox_right">
        <h1>Your List of Books</h1>
        <ul>                       
          {
            booksList.map(
                function (book, index) {
                    console.log(book)
                    return (
                        <div className="list-group-item">
                            <li  key={index}>{book.title}</li>
                        </div>                        
                    )
                }
            )}
        </ul>
    </div>
    )
}