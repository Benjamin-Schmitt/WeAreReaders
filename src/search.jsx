import React, { useState } from 'react'
import axios from 'axios'
import { MyList } from './myList.jsx';
import { NavBar } from './nav.jsx';

export function SearchBooks() {   
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const [clickedBooks, setClickedBooks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => {
            setBooks(response.data.items)
            })
        .catch(err => {
            console.log(err)
            })
        }    
        console.log(books)
        console.log(clickedBooks)

    const resetInput = () => {
        document.getElementsByClassName("input")[0].value = '';
    }
    
        return (
        <div className="box">            
            <div className="innerbox_left">
            <h1>We Are Readers</h1>
            <NavBar />          
                <form onSubmit={handleSubmit}>
                    
                    <fieldset>   
                    <legend>Search For Books</legend>
                        <input
                        onChange={e => {setQuery(e.target.value)}}
                        className="input" 
                        type="text" 
                        name="books" 
                        id="books" 
                        placeholder="search for books"   
                        required        
                        />
                        <br />
                        <nav className="nav">
                            <button className='submit' type="submit">Search</button>
                            <button className='reset' type="submit" onClick={resetInput} >reset</button>
                            <button className='myList' type="submit">my List</button>
                        </nav>
                    </fieldset>
                </form>          
            
                <ul className="output">
                    {                
                    books.map((book, index) => {
                        let cover = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                        let sale = null;
                        let saleButton = null;
                        let listButton = null;

                        function addBooks() {
                            setClickedBooks(clickedBooks => [...clickedBooks, book.volumeInfo]);
                        }
                        
                        function title() {
                            if (book.volumeInfo.title) {
                                return book.volumeInfo.title
                            } else {
                                return "No Title available"
                            }
                        }

                        function author() {
                            if (book.volumeInfo.authors) {
                                return book.volumeInfo.authors
                            } else {
                                return "No Author available"
                            }
                        }

                        function forSale() {
                            if(book.saleInfo.buyLink) {
                                sale = book.saleInfo.buyLink;
                                return ([saleButton = <button className="saleButton"><a href={sale} className="saleLink">kaufen</a></button>,
                                <button className="listButton" onClick={addBooks}>add to list</button>
                            ])
                            } 
                            else {
                                sale = book.saleInfo.saleability;
                                return (
                                    <button className="notAv">
                                        nicht erhältlich
                                    </button>
                                    )
                            }
                        }
                        
                        if(cover!=undefined) {
                        return (                        
                                <li key={index}>                         
                                        {title()} <br />
                                        by <br />   
                                        {author()} <br />  
                                        <img src={cover} alt=""/> <br />
                                        {forSale()}
                                </li>
                            )
                        }
                        })
                    }
                </ul>
            </div>

            <MyList clickedBooks={clickedBooks}/>
            
        </div>
        
    )
    
}
export default SearchBooks

