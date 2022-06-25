import { useContext, useState } from 'react'
import { BooksContext } from '../contexts/BooksContext.jsx';
import { Rating } from './Rating.jsx';
import uniqid from 'uniqid';

export function MyList() {
    const { booksList } = useContext(BooksContext);
   
    return (
    <div>
        <h1>Your List of Books</h1>                              
          {
            booksList.map(
                function (book, index) {
                    const deleteBook = () => {
                        document.getElementById(book.myUniqueId).remove();
                        booksList.splice(index, 1);
                    }

                return (
                    <div className="outer-box" id={book.myUniqueId} key={index}>                   
                            <div>
                                <img className="list-img" src={book.imageLinks.thumbnail} alt={book.title} />
                                <Rating book={book} i={index} />
                                <button className="infoLink"><a href={book.infoLink}>Infos</a></button>
                                <button className="remove" onClick={deleteBook} >remove</button>
                                <div className="id-checker">ID: {book.myUniqueId}</div>
                            </div>

                            <div className="title-and-author" key={index}>                  
                                <div className="card-content">{book.title}</div> 
                                <div className="card-content">von {book.authors}</div> 
                                <div className="card-content-description">{book.description}</div>
                            </div>
                    </div>                  
                )
            }
           )
         }
    </div>
    )
}