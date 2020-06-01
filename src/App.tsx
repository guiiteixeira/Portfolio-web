import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import {  BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes/>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
