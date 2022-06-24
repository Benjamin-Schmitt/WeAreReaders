import { useState } from 'react'
import axios from 'axios'
import { NavBar } from './Navbar.jsx';
import { Link } from "react-router-dom";
import { BookCard } from './BookCard.jsx';

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

                        <nav className="nav">
                            <button className='submit' type="submit">Search</button>
                            <button className='reset' type="submit" onClick={resetInput} >reset</button>
                            <button className='my-list'><Link to="/reader/mylist">my List</Link></button>
                        </nav>
                    </fieldset>
                </form>          
            
                <ul className="output">
                    { books.map((book, index) => {          
                        return <BookCard book={book} index={index} key={index} />
                    }) 
                    }
                </ul>
            </div>
        </div>   
        )
}