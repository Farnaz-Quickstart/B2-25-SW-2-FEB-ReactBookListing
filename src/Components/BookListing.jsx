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

  return (
    <>
    <Table responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>Book Title</th>
          <th>Book Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {books.map((book,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td><Button variant="danger" name="btnDelete" onClick={(event)=>handleDelete(event,book.id)}>Danger</Button></td>
            </tr>
         ))}
      </tbody>
    </Table>
    </>
  
  )
}
