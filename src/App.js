import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar'
import NewBookForm from './components/NewBookForm'
import BookContextProvider from './contexts/BookContext'
import DragBody from './components/drag/DragBody';
import './App.css'

const App = () => {

  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
        <DragBody />
      </BookContextProvider>
    </div>
  );
}

export default App;

