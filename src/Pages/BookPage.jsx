import React, {useState} from 'react'
import SearchBook from '../Components/SearchBook'
import BookListing from '../Components/BookListing';
import BookRegistration from '../Components/BookRegistration';


export default function BookPage() {
    const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear", status: "read" },
    { id: 2, title: "Deep Work", author: "Cal Newport",  status: "read" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas",  status: "read" },
  ]);

  return (
    <>
      <SearchBook books={books} setBooks={setBooks} />
      <BookListing books={books} setBooks={setBooks} />
      <BookRegistration books={books} setBooks={setBooks} />
    </>
  )
}
