import {useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookListing from './Components/BookListing';
import SearchBook from './Components/SearchBook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas" },
  ]);
  return (
   <>
    <h1>Book Listing</h1>
    <SearchBook books={books} setBooks={setBooks}  />
    <BookListing books={books} setBooks={setBooks}  />
   </>
  );
}

export default App;
