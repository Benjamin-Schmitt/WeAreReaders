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

export function QueryOpenLibrary() {
    const [books, setBooks] = useState([])


/* 
    let url = "http://openlibrary.org/search.json?q="
    let options = {
        method: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
            limit: 5,
            fields: title,key,author_name,isbn
        }
    };
 */


    useEffect(() => {
    axios.get('http://openlibrary.org/search.json?q=the saboteurs&limit=5&fields=title,cover_i,key,author_name,isbn')
        .then(response => {
            console.log(response)
            setBooks(response.data.docs)
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
                return (
                    <li key={index}>
                        {book.author_name} <br></br>
                        {book.title} <br></br>
                        {book.isbn[0]}<br></br>                        
                        <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[3]}-M.jpg`}></img>            
                    </li>
                    )
                })
                }
            </ul>
        </div>
    )

}
export default Search



