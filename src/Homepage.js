import React , {useState, useEffect}from 'react'
import './homepage.css'
import * as BooksAPI from './BookAPI'
import HomepageAll from './HomepageAll';
import WantToRead from './WantToRead';
function HomePage() {
    const [books, setbooks] = useState([]);
    const bookID = 'nggnmAEACAAJ';
    useEffect(() => {
        BooksAPI.getAll().then(
            rish => setbooks(rish)
        )
    }, []);

    return (
        <div className = "homepage">
            <div className= "homepage__header">
                <h1>My Books Project</h1>
            </div>
            <h1>All Books</h1>
            <div className = "homepage__all">
            {books.map(
                book => <HomepageAll title={book.title} name = {book.authors[0]} src={book.imageLinks.thumbnail} pref={book.shelf}/>
            )}
            </div>
            <h1> Want to read</h1>
            <div className = "wanttoread">
            <WantToRead books = {books.filter((book) => {
                        return book.shelf === 'read';
            })}/>
            </div>
        </div>
    )
}

export default HomePage
