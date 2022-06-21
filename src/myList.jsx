import React, { useState } from 'react'
import axios from 'axios'

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
        <a href="#"> -- My Books -- </a>
    </div>
    )
}

/* 
task: add clicked books to MyList when add to list button is clicked
    to add clicked books, we need to first get id/name/title of the clicked book
        then we add it to a variable
            we pass the variable as props to MyList
    
    to add clicked books, we need to also have a function onClick that handles this process

    Necessary work:
    1. get id/title of book that has been clicked
    2. create array,  -DONE-
        then save book title to array, saving means using useState function 
    3. pass whole array to MyList
    4. create onClick attribute to add to list button
    5. create handler for button
*/