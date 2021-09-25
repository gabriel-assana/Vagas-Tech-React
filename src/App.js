import './assets/style/global.css';

import React from 'react';

import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx';
import Main from './components/Main/index.jsx';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
   </>
  );
}

export default App;
