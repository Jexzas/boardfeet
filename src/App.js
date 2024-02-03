import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Naming from './components/naming';

// Establish US dollar format
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class Wood {
  constructor (nickname, species, price, length, width, thickness) {
    this.nickname = nickname;
    this.species = species; 
    this.price = price;
    this.length = length;
    this.width = width;
    this.thickness = thickness;
  }
  getBoardFeet() {
    let volume = (this.width) * (this.length) * (this.thickness);
    return volume / 12;
  }
  getTotalPrice() {
    return USDollar.format(this.price * this.getBoardFeet());
  }
}

function App() {
  let [wood, setWood] = useState({});
  let thisWood = new Wood()
  let counter = 1;

  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    if (location.pathname == "/" || location.pathname == "/0") {
      navigate("/1");
    }
  }, []);
  

  function handleNavigate(direction) {
    if (direction == "forward") {
      console.log(counter);
      if (counter < 5) {
        counter++;
      }
    } else if (direction == "backward") {
      if (counter > 0) {
        counter--;
      }
    }
    navigate(`/${counter}`);
  }

  function handleName(name) {
    thisWood.nickname = name;
    setWood(thisWood);
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
    <div className="d-flex-inline justify-content-center">
      <nav className='navbar text-white bg-dark d-flex justify-content-center'>
        <div className='navbar-brand text-center text-white'><h1>Board Feet Calculator</h1></div>
      </nav>
      <div className='container content bg-light d-flex'> 
        <div className='card leftThing col-12 col-lg-6'>
          <h3>This board:</h3>
          <ul className='list-unstyled text-start line-items'>
            <li className='col-12'><h4>Name: {wood.nickname}</h4></li>
            <li className='col-12'><h4>Species: {wood.species}</h4></li>
            <li className='col-12'><h4>Price (per board foot): ${wood.price}</h4></li>
            <li className='col-12'><h4>Length (in feet): {wood.length}</h4></li>
            <li className='col-12'><h4>Width (in inches): {wood.width}</h4></li>
            <li className='col-12'><h4>Thickness (in inches): {wood.thickness}</h4></li>
            <li className='col-12'><h3>Board Feet: {wood.getBoardFeet}</h3></li>
            <li className='col-12'><h3>Total Price: ${wood.getTotalPrice}</h3></li>
          </ul>
        </div>
        <div className='card rightThing col-12 col-lg-6'>
          <Routes>
            <Route index path="/1" element={<Naming handleName={handleName} handleNavigate={handleNavigate}/>}/>
            <Route path="/2" element={<Naming handleSpecies={handleSpecies} handleNavigate={handleNavigate}/>}/>
            <Route path="/3" element={<Naming handlePrice={handlePrice} handleNavigate={handleNavigate}/>}/>
            <Route path="/4" element={<Naming handleLength={handleLength} handleNavigate={handleNavigate}/>}/>
            <Route path="/5" element={<Naming handleWidth={handleWidth} handleNavigate={handleNavigate}/>}/>
            <Route path="/6" element={<Naming handleThick={handleThick} handleNavigate={handleNavigate}/>}/>
          </Routes>
        </div>
      </div>
      <div className='container'>
        <div className='card bottomThing col-12'>
          <Routes>
            <Route index path="/1" value="pick existing boards"/>
            <Route index path="/2" value="pick species"/>
            <Route index path="/3" value="Nothing to see here"/>
            <Route index path="/4" value="Common lengths"/>
            <Route index path="/5" value="Common widths"/>
            <Route index path="/6" value="Common thicks"/>
          </Routes>
          card for picking things
        </div>
      </div>
    </div>
  );
}

export default App;
