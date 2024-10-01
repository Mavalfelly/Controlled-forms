import { useState } from 'react';


const Bookshelf = () => {
    const [books,setBooks] = useState([]);
    const [newBook,setNewBook] = useState({
        title: '',
        author:'',
    });
    const handleInputChange = (e) => {
        setNewBook({...newBook, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault(),
        console.log('submitting book')
        setBooks([...books, newBook])
        setNewBook({ title: '',author:'',})
    };


    return(
        <>    
            <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Book Title: </label>
                    <input
                        id='title'
                        name='title'
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                    <br/>
                    <label htmlFor="author">Author: </label>
                    <input
                        id='author'
                        name='author'
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type='submit'>Add Book</button>
                </form>
            </div>
                <div className="bookCardsDiv">
                    {books.length === 0 ? (
                        <p>Add some books 😁</p>
                    ):(
                       books.map((book,i) => (
                        <div key={i} className='bookCard'>
                            <h3>{book.title}</h3>
                            <h6>Written by {book.author}</h6>
                        </div>
                       )) 
                    )}
                </div>
            </div>
        </>
    )
}

export default Bookshelf 