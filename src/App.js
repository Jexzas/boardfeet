import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Naming from './components/naming';
import Pricing from './components/pricing';
import Species from './components/species';
import Length from './components/length';
import Width from './components/width';
import Thickness from './components/thickness';
import SpecSelector from './components/specselector';
import API from './components/API/connect';

// Establish US dollar format
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Every wood you add to this calculator will be saved as an object
class Wood {
  constructor (nickname, species, price, length, width, thickness) {
    this.nickname = nickname;
    this.species = species; 
    this.price = price;
    this.length = length;
    this.width = width;
    this.thickness = thickness;
  }

  /**
   * Calculates board feet using given dimensions
   * @params none
   * @returns number
   */
  getBoardFeet() {
    let volume = (this.width) * (this.length) * (this.thickness);
    return volume / 12;
  }

  /**
   * Calculates total price using boardfeet and unit cost
   * @params none
   * @returns number
   */
  getTotalPrice() {
    return USDollar.format(this.price * this.getBoardFeet());
  }
}

function App() {
  // This one is for the current working wood
  let [wood, setWood] = useState({});
  // This one pulls pre-created woods from the API
  let [userWoods, setUserWoods] = useState([]);
  // Pulls wood species from the API
  let [species, setSpecies] = useState([]);

  let thisWood = new Wood()
  // This counter is for React Router to determine what step in the form you're on
  let counter = 1;

  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to page 1 if on the index page, if on page 1 pull the user generated woods
  useEffect(() => {
    if (location.pathname == "/" || location.pathname == "/0") {
      navigate("/1");
    }
    if (location.pathname == "/1") {
      getUserWoods();
    }
    if (location.pathname == "/2") {
      getSpecies();
    }
  }, []);
  

  /**
   * Get the species of woods from the API
   * @returns none
   **/
  const getSpecies = async () => {
    setSpecies(await API.getWoods());
  }

   /**
   * Get the created woods from the API
   * @returns none
   **/
   const getUserWoods = async () => {
    setUserWoods(await API.getUserWoods());
  }

  /**
   * Move the form using the counter
   * @returns none
   * @param {string} direction 
   */
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

  /**
   * Creates the name for your current as you're typing it so it can be displayed
   * @returns none
   * @param {string} name 
   */

  function handleName(name) {
    thisWood.nickname = name;
    setWood(thisWood);
  }

  /**
   * Creates the name for your current species of wood as you're typing
   * @returns none
   * @param {number} species
   */
  function handleSpecies(species) {

  }

  /**
   * Creates the per unit prices as you're typing
   * @returns none
   * @param {number} price 
   */
  function handlePrice(price) {

  }

  /**
   * Adds the length of the board in feet to the list
   * @returns none
   * @param {number} length 
   */
  function handleLength(length) {

  }

  /**
   * Adds the width in inches
   * @returns none
   * @param {number} width 
   */
  function handleWidth(width) {

  }

  /**
   * Adds the thickness in inches
   * @returns none
   * @param {number} thickness 
   */
  function handleThickness(thickness) {

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
            <Route path="/2" element={<Species handleSpecies={handleSpecies} handleNavigate={handleNavigate}/>}/>
            <Route path="/3" element={<Pricing handlePrice={handlePrice} handleNavigate={handleNavigate}/>}/>
            <Route path="/4" element={<Length handleLength={handleLength} handleNavigate={handleNavigate}/>}/>
            <Route path="/5" element={<Width handleWidth={handleWidth} handleNavigate={handleNavigate}/>}/>
            <Route path="/6" element={<Thickness handleThickness={handleThickness} handleNavigate={handleNavigate}/>}/>
          </Routes>
        </div>
      </div>
      <div className='container'>
        <div className='card bottomThing col-12'>
          <Routes>
            <Route index path="/1" value="pick existing boards"/>
            <Route index path="/2" value="pick species" element={<SpecSelector woods={species} />} />
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
