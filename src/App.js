import React from 'react';
import Home from './Pages/Home';
import StoreProvider from './Store/StoreProvider'; 
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Home/>
    </StoreProvider>
  );
}

export default App;
