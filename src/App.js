import React from 'react';
//Config router
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
//Styles
import {Globalcss} from './Globalcss'
//Componets
import Header from './components/Headers';
import Home from './components/Home/home';
import Movie from './components/Movie/index'

const  App = () => { // cấu trúc tương tự App = () =>()  [return func]
  return (
  <BrowserRouter>
    
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/:movieId' element={<Movie/>}/>
   </Routes>
    <Globalcss/>
  </BrowserRouter>
      
   
  );
}

export default App;
