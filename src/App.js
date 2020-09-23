import React from 'react';
import './bootstrap.scss';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/Common/ScrollToTop';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <MainComponent/>
    </BrowserRouter>
  );
}
export default App;
