import { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext.jsx';
import { Rating } from './Rating.jsx';


export function MyList() {
    const { booksList } = useContext(BooksContext);
    return (
    <div>
        <h1>Your List of Books</h1>
        <ul>                       
          {
            booksList.map(
                function (book, index) {
                return (
                    <div className="outer-box list-group-item" key={index}>                   
                            <div>
                                <img className="list-img" src={book.imageLinks.thumbnail} alt={book.title} />
                                <Rating book={book} i={index} />
                                {<button className="infoLink"><a href={book.infoLink}>Infos</a></button>}
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
        </ul>
    </div>
    )
}