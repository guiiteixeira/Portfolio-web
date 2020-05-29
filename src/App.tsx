import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import {  BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
