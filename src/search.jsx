import React, {useState, useEffect} from 'react'
import axios from 'axios'

export function QueryOpenLibrary() {    
    // states
    const [books, setBooks] = useState([])
    const [query, setQuery] = useState('')

    // JSX in variables
    let searchBar = 
    <div className="box">
    <h1>We Are Readers</h1>    
    <form>
        <fieldset>
        <legend>Search For Books</legend>
            <input
            /* value={query} */
            onChange={e => setQuery(e.target.value)}
            className="input" 
            type="text" 
            name="books" 
            id="books" 
            placeholder="search for books"            
            />
            <br></br>
            <button type="submit">search</button>
        </fieldset>
    </form>
    </div>

    useEffect(() => {    
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then(response => {
        setBooks(response.data.items)
        })
        .catch(err => {
            console.log(err)
        })
    },[]
    )
    
    return (
        <div>
            {searchBar}
            <ul>
                {                
                books.map((book, index) => {
                    let cover = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    let sale = null;
                    let saleButton = null;
                    
                    function forSale() {
                        if(book.saleInfo.buyLink) {
                            sale = book.saleInfo.buyLink;
                            return (saleButton = <button><a href={sale}>kaufen</a></button>)
                        } 
                        else {
                            sale = book.saleInfo.saleability;
                            return (saleButton = <p>Buch nicht bei Google erhältlich</p>)
                        }
                    }

                    if(cover!=undefined) {
                    return (
                        <div>
                        <li key={index}>
                            {book.volumeInfo.title} <br></br> by <br></br>   
                            {book.volumeInfo.authors} <br></br>  
                            <img src={cover} alt=""/> <br></br>
                            {forSale()}
                        </li>
                        </div>
                        )
                    }
                    })
                }
            </ul>
        </div>
    )
}
export default QueryOpenLibrary