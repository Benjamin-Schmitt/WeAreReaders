import { useState, useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext.jsx';
import uniqid from 'uniqid';


export function Test() {
    const { booksList, setBooksList } = useContext(BooksContext);

    const test = {
        name: 'Test',
    }
    
    function click() {
        setBooksList(booksList => [...booksList, test]);
        console.log(booksList)
    }


    function clickTwo() {
        console.log(booksList)
    }

    return (
        <div>
            <button onClick={clickTwo}> clickTwo </button>
            <button onClick={click}> click </button>
            <div>
                {/* map booksList */}
                {booksList.map(
                    function (book, index) {
                        return (
                            <div key={index}>
                                {book.name}
                            </div>
                        )
                        }
                )}

            </div>

            {/* <div>
                {booksList[0].name}
            </div> */}
        </div>
    )

}