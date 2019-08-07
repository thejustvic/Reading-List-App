import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar'
import NewBookForm from './components/NewBookForm'
import BookContextProvider from './contexts/BookContext'
import DragBody from './components/drag/DragBody/DragBody';
import './App.css'
import ContainerContextProvider from './contexts/ContainerContext';

const App = () => {

  return (
    <div className="App">
      <ContainerContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
          <DragBody />
        </BookContextProvider>
      </ContainerContextProvider>
    </div>
  );
}

export default App;

