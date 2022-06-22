import React, { useState } from 'react'
import { BooksContext } from '../contexts/BooksContext.jsx'; 


export function MyList(props) {
    const { booksList } = React.useContext(BooksContext);
    /* console.log(booksList) */
    
    return (
    <div className="innerbox_right">
        <h1>Your List of Books</h1>
        <ul>                       
          {
            booksList.map(
                function (book, index) {
                    console.log(book)

                    function Rating() {
                        if (!book.averageRating ) {
                            return (
                                <div className="no-rating">
                                No Rating available
                                </div>
                                ) 
                        } else {
                            return (
                                <div className="stars">
                                {book.averageRating} / 5 stars                 
                                </div>
                                )
                        }
                    }

                    return (
                        <div className="outer-box list-group-item">                      
                                <div>
                                    <img className="list-img" src={book.imageLinks.thumbnail} alt={book.title} />
                                    {<Rating />}
                                    {<button className="infoLink"><a href={book.infoLink}>Infos</a></button>}
                                </div>

                                <div className="title-and-author">                       
                                    {book.title} <br /> by &nbsp;{book.authors} <br /> <br />
                                    {book.description} <br />
                                </div>
                        </div>                        
                    )
                }
            )}
        </ul>
    </div>
    )
}