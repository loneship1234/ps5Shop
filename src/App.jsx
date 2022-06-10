import React from 'react'
// route
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
// 
import NavBar from './components/NavBar';
// import {Card,CardSecondary} from './components/card'
// import ToTopButton from './components/ToTopButton';
import Footer from './components/Footer';
import Page404 from './components/Page404';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import {Login} from './components/Login';
import Account from './components/Account';
import News from './components/News';
import GameCatalog from './components/GameCatalog';

function App() {
  return (
    <Router>
    <NavBar>
         <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/about-us' element={<AboutUs/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/account' element={<Account/>}/>
       <Route path='/news' element={<News/>}/>
        <Route path='/Games' element={<GameCatalog/>}/> 
       <Route path='*' element={<Page404/>}/>
        </Routes>
        <Footer/>
        </NavBar>
        </Router>
  )
}
  

export default App