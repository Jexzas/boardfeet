import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Naming from './components/naming';


class Wood {
  constructor (nickname, species, price, length, width, thickness) {
    this.nickname = nickname;
    this.species = species; 
    this.price = price;
    this.length = length;
    this.width = width;
    this.thickness = thickness;
  }
}

function App() {
  let [wood, setWood] = useState({});
  let thisWood = new Wood()
  let counter = 0;

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/0");
  }, []);

  function handleNavigate(direction) {
    if (direction == "forward") {
      if (counter < 5) {
        counter++;
      }
    } else {
      if (counter > 0) {
        counter--;
      }
    }
    navigate(`/${counter}`);
  }

  function handleName(name) {

  }

  function handleSpecies(species) {

  }

  function handlePrice(price) {

  }

  function handleLength(length) {

  }

  function handleWidth(width) {

  }

  function handleThick(thickness) {

  }

  return (
    <div className="App">
      <nav className='navbar text-white bg-dark d-flex justify-content-center'>
        <div className='navbar-brand text-center text-white'><h1>Board Feet Calculator</h1></div>
      </nav>
      <div className='content bg-light'> 
        <div className='card leftThing col-12 col-lg-6'>
          <h3>This board:</h3>
          <ul>
            <li><h4>Name: {wood.name}</h4></li>
            <li><h4>Species {wood.species}</h4></li>
            <li><h4>Price (per board foot) ${wood.price}</h4></li>
            <li><h4>Length (in feet): {wood.length}</h4></li>
            <li><h4>Width (in inches): {wood.width}</h4></li>
            <li><h4>Thickness (in inches): {wood.thickness}</h4></li>
            <li><h3>Board Feet: {getBoardFeet}</h3></li>
            <li><h3>Total Price: ${getTotalPrice}</h3></li>
          </ul>
        </div>
        <div className='card rightThing col-12 col-lg-6'>
          <Routes>
            <Route path="/0" element={<Naming handleName={handleName} handleNavigate={handleNavigate}/>}/>
            <Route path="/1" element={<Naming handleSpecies={handleSpecies} handleNavigate={handleNavigate}/>}/>
            <Route path="/2" element={<Naming handlePrice={handlePrice} handleNavigate={handleNavigate}/>}/>
            <Route path="/3" element={<Naming handleLength={handleLength} handleNavigate={handleNavigate}/>}/>
            <Route path="/4" element={<Naming handleWidth={handleWidth} handleNavigate={handleNavigate}/>}/>
            <Route path="/5" element={<Naming handleThick={handleThick} handleNavigate={handleNavigate}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
