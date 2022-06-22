import React, { useState } from 'react'


export function MyList(props) {

    return (
    <div className="innerbox_right">
        <h1>Your List of Books</h1>
        <ul>                       
          {
            props.clickedBooks.map(
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