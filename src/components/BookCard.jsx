import { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext.jsx';

export const BookCard = (props) => {
    const { booksList, setBooksList} = useContext(BooksContext);
    let cover = props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail;
    let saleButton = null;
  
        
    function addBooks() {
        setBooksList(booksList => [...booksList, props.book.volumeInfo]);                         
    }    
    
    const forSale = () => {
        if(props.book.saleInfo.buyLink) {
            return ([saleButton = <button key={props.index} className="saleButton"><a href={props.book.saleInfo.buyLink} className="saleLink">kaufen</a></button>,
            <button key={props.index+1} className="listButton" onClick={addBooks}>add to list</button>
        ])
        } 
        else {
            return (
                <button className="notAv" key={props.index}>
                    nicht erhältlich
                </button>
                )
        }
    }

    if(cover!=undefined) {
        return (        
            <li key={props.index}>
                {((props.book.volumeInfo.title) ? props.book.volumeInfo.title+" von " : "No title available")}
                {((props.book.volumeInfo.authors) ? props.book.volumeInfo.authors : "No Author available")}              
                <div>{cover!=undefined && <img key={props.index} src={cover} alt=""/>}</div>
                <div>{forSale()}</div>
            </li>           
        )
    }
}