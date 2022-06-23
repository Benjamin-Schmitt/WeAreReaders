import { useContext } from 'react';

import { BooksContext } from '../contexts/BooksContext.jsx';

export const BookCard = (props) => {
    const { booksList, setBooksList} = useContext(BooksContext);
    let cover = props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail;
    let sale = null;
    let saleButton = null;
    let listButton = null;    
    function addBooks() {
        setBooksList(booksList => [...booksList, props.book.volumeInfo]);                         
    }  
      
    function title() {
        if (props.book.volumeInfo.title) {
            return props.book.volumeInfo.title
        } else {
            return "No Title available"
        }
    }

    function author() {
        if (props.book.volumeInfo.authors) {
            return props.book.volumeInfo.authors
        } else {
            return "No Author available"
        }
    }

    function forSale() {
        if(props.book.saleInfo.buyLink) {
            sale = props.book.saleInfo.buyLink;
            return ([saleButton = <button key={props.index} className="saleButton"><a href={sale} className="saleLink">kaufen</a></button>,
            <button key={props.index+1} className="listButton" onClick={addBooks}>add to list</button>
        ])
        } 
        else {
            sale = props.book.saleInfo.saleability;
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
                <div>{title()}</div>             
                <div>by {author()}</div>
                <div>{cover!=undefined && <img src={cover} alt=""/>}</div>
                <div>{forSale()}</div>
            </li>           
        )
    }
}

