import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function BookListing( {books, setBooks}) {
  
  function handleDelete (event, bookID) {
    console.log (event)
    console.log (bookID)
    const result = books.filter(book=>book.id!==bookID)
    setBooks (result)
  }


  function handleUpdate (event, BookID) {
    const updatedBooks = books.map(book => {                        // We go through each book in the list.
      console.log ("The id of the Book: ", book.id)
      console.log ("The ID of row that need to be changed", BookID)
      if (book.id === BookID) {                                     // "We check: is this the book that was clicked? (The one whose status we want to change?)"
        return {                                                    // "If yes, we copy all the existing book data using { ...book }, but we change just the status."
          ...book,
          status: 'read'
        };
      }
      return book;                                                  // "If this is not the book we're updating, we just return it as-is."
    });
    setBooks(updatedBooks);
  }

  return (
    <>
    <Table responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>Book Title</th>
          <th>Book Author</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
         {books.map((book,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
              <td><Button variant="danger" name="btnDelete" onClick={(event)=>handleDelete(event,book.id)}>Danger</Button></td>
              <td><Button variant="success" name="btnDelete" onClick={(event)=>handleUpdate(event,book.id)}>Update</Button></td>
              
            </tr>
         ))}
      </tbody>
    </Table>
    </>
  
  )
}
