import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './brand.png'; 
import AlissaEd from './AlissaEd.jpg';
import KobiEd from './KobiEd.jpg';
import AvaEd from './AvaEd.jpg';


import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className="header">
                <img src={ logo } className="brand" />
                 <div className="social-media">
                    Connect on 
                        <a href="https://facebook.com">
                             ⓕ
                        </a>
                </div>
            </div>
            <div className="nav">
             <a className="Home" href= "./Hero">Home</a>
             <a className="About" href= "./Hero">About</a>
             <a className="Contact" href= "./Hero">Contact</a>
             <a className="Pricing" href= "./Hero">Pricing</a>
             <a className="Reviews" href= "./Hero">Reviews</a>
            </div>
            <div className="navv">
                </div>
            <div className="photos">
                <img src={ AlissaEd } className= "Pic" />
                <img src={ KobiEd } className= "Pic2" />
                <img src={ AvaEd } className= "Pic3" />
            </div>
            <div className="almost">
            <img src={ logo } className="brand2" />
            </div>
            <div className="footer">
            Located in Cowley County, KS
            Portrait and Sports Photographer
            </div>
            <div className= "bottom">
            "Whether you're shy or outgoing, Dae will make you feel loved"
            </div>
        
            <Routes>
                <Route path="/test" element={
                    <div>
                        Test
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;