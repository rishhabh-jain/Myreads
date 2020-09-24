import React from 'react'
import './wanttoread.css'

function WantToRead({books}) {
    return (
        <div className = "wanttoread">
            <h1>{books.map(book => book.title)}</h1>
            <h3>{books.map(book => book.authors[0])}</h3>
            <img src= {books.map(book => book.imageLinks.thumbnail)}/>
        </div>
    )
}

export default WantToRead
