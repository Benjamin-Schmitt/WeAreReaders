import React, {useState, useEffect} from 'react'
import axios from 'axios'



export function Search () {   
    return (
    <div className="box">
        <h1>We Are Readers</h1>
        
        <form>
            <fieldset>
            <legend>Search For Books</legend>
                <input className="input" type="text" name="books" id="books" />
                <br></br>
                <button type="submit">search</button>
            </fieldset>
        </form>
    </div>
    )
}


// inspiration: https://github.com/Mohammed-Abdelhady/google-books-search/blob/master/src/App.jsx
// https://reactstrap.github.io/?path=/story/home-installation--page

export function QueryOpenLibrary() {
    const [books, setBooks] = useState([])

    useEffect(() => {    
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=deep work`)
        .then(response => {
        console.log(response.data.items)
        setBooks(response.data.items)
        })
        .catch(err => {
            console.log(err)
        })
    },[]
    )

    
    return (
        <div>
            <ul>
                {                
                books.map((book, index) => {
                    let cover = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    let sale = null;
                    let saleButton = null;
                    
                    function forSale() {
                        if(book.saleInfo.buyLink) {
                            console.log(book.saleInfo.buyLink)
                            sale = book.saleInfo.buyLink;
                            return (saleButton = <button><a href={sale}>kaufen</a></button>)
                        } 
                        else {
                            console.log("buyLink does not exist")
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


export default Search