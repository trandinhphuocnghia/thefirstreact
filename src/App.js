import React from 'react';
//Styles
import {Globalcss} from './Globalcss'
//Componets
import Header from './components/Headers';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Globalcss/>
    </div>
  );
}

export default App;
