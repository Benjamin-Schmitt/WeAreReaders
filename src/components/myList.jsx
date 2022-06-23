import {useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext.jsx'; 


export function MyList() {
    const { booksList } = useContext(BooksContext);
    
    return (
    <div className="innerbox_right">
        <h1>Your List of Books</h1>
        <ul>                       
          {
            booksList.map(
                function (book, index) {
                    function Rating() {
                        if (!book.averageRating ) {
                            return (
                                <div key={index} className="no-rating">
                                No Rating available
                                </div>
                                ) 
                        } else {
                            return (
                                <div key={index} className="stars">
                                {book.averageRating} / 5 stars                 
                                </div>
                                )
                        }
                    }

                    return (
                        <div className="outer-box list-group-item" key={index}>                      
                                <div>
                                    <img className="list-img" src={book.imageLinks.thumbnail} alt={book.title} />
                                    {<Rating />}
                                    {<button className="infoLink"><a href={book.infoLink}>Infos</a></button>}
                                </div>

                                <div className="title-and-author" key={index}>                       
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