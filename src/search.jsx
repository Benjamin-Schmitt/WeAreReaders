import React, { useState } from 'react'
import axios from 'axios'

export function SearchBooks() {   
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

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

    return (
        <div>
            <div>
            <h1>We Are Readers</h1>
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
                        <button className='reset' type="submit">reset</button>
                        <button className='myList' type="submit">my List</button>
                    </nav>
                </fieldset>
            </form>
            </div>

            <ul className="output">
                {                
                books.map((book, index) => {
                    let cover = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    let sale = null;
                    let saleButton = null;
                    let listButton = null;
                    
                    function forSale() {
                        if(book.saleInfo.buyLink) {
                            sale = book.saleInfo.buyLink;
                            return ([saleButton = <button className="saleButton"><a href={sale} className="saleLink">kaufen</a></button>,
                            <button className="listButton">add to list</button>
                        ])
                        } 
                        else {
                            sale = book.saleInfo.saleability;
                            return (saleButton = <p className="bookNotAvailable">nicht erhältlich</p>)
                        }
                    }
                    
                    if(cover!=undefined) {
                    return (                        
                            <li key={index}>                            
                                    {book.volumeInfo.title} <br></br> by <br></br>   
                                    {book.volumeInfo.authors} <br></br>  
                                    <img src={cover} alt=""/> <br></br>
                                    {forSale()}
                            </li>
                        )
                    }
                    })
                }
            </ul>           
        </div>
    )
}
export default SearchBooks