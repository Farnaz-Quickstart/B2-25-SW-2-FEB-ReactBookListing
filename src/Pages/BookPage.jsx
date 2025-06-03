import React, {useState} from 'react'
import SearchBook from '../Components/SearchBook'
import BookListing from '../Components/BookListing';


export default function BookPage() {
    const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "Deep Work", author: "Cal Newport" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas" },
  ]);

  return (
    <>
      <SearchBook books={books} setBooks={setBooks} />
      <BookListing books={books} setBooks={setBooks} />
    </>
  )
}
