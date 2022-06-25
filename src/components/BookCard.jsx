import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext.jsx';
import uniqid from 'uniqid';

export const BookCard = (props) => {
    const { booksList, setBooksList } = useContext(BooksContext);    
     
    const addBooks = () => {
        //giving it a uniqe id
        props.book.volumeInfo.myUniqueId = uniqid();
        //"feeding" BooksContext
        setBooksList(booksInList => [...booksInList, props.book.volumeInfo]);
        console.log(booksList)
    }    
    
    const forSale = () => {
        if(props.book.saleInfo.buyLink) {
            return [
                <button key={props.index} className="saleButton">
                    <a href={props.book.saleInfo.buyLink} className="saleLink">kaufen</a>
                </button>,
                
                <button key={props.index+1} className="listButton" onClick={addBooks}>
                    add to list
                </button>
             ]
        } 
        else {
            return (
                <button className="notAv" key={props.index}>
                    nicht erhältlich
                </button>
                )
        }
    }

    let cover = props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail;
    if(cover!==undefined) {
        return (        
            <li key={props.index} alt="a list with all books, found by the search">
                {((props.book.volumeInfo.title) ? (props.book.volumeInfo.title+" von ") : "No title available")}
                {((props.book.volumeInfo.authors) ? props.book.volumeInfo.authors : "No Author available")}              
                <div>{cover!==undefined && <img key={props.index} src={cover} alt="book cover" />}</div>
                <div>{forSale()}</div>
            </li>           
        )
    }
}