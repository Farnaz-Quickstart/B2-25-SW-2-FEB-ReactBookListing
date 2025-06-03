import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import HomePage from './Pages/HomePage'
import BookPage from './Pages/BookPage'
import ContactPage from './Pages/ContactPage';


function App() {

  return (
   <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
