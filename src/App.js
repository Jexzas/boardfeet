import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  [inputFields, setInputFields] = useState(['species', 'price', 'length', 'width', 'thickness']);

  function handleFormChange (index, event) {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
    console.log(inputFields);
  }

  return (
    <div className="App">
      <nav className='navbar text-white bg-dark d-flex justify-content-center'>
        <div className='navbar-brand text-center text-white'><h2>Board Feet Calculator</h2></div>
      </nav>
      <div className='content bg-light'> 
        <form className='d-flex'>
          <div className='form-group col-12 col-lg-6'>
            <label className='form-control'>Species of Wood (just for fun)</label>
            <input onChange={handleFormChange(index, event)} className='form-control' type='text' name="species" id="species" placeholder='walnut or somethin'></input>
            <label className='form-control'>Price per board foot (also for fun)</label>
            <input onChange={handleFormChange(index, event)} className='form-control' type='text' name="price" id="price" placeholder="number no dollar signs"></input>
            <label onChange={handleFormChange(index, event)} className='form-control'>Length of board (in inches)</label>
            <input className='form-control' type='text' id='length' placeholder='inches please (feet x 12)' name="length"></input>
            <label onChange={handleFormChange(index, event)} className='form-control'>Width of board (in inches)</label>
            <input className='form-control' type='text' id='width' placeholder='inches please (feet x 12)' name="width"></input> 
            <label onChange={handleFormChange(index, event)} className='form-control'>Thickness of board (in inches)</label>
            <input className='form-control' type='text' id='thickness' placeholder='inches please (feet x 12)' name="thickness"></input>
          </div>
          <div className='form-group col-12 col-lg-6'>
            <label className='form-control'>Your {species} wood</label>
            <input className='form-control' type='text' id="species" placeholder='walnut or somethin'></input>
            <label className='form-control'>that costs ${price} per board foot,</label>
            <input className='form-control' type='text' id="price" placeholder="number no dollar signs"></input>
            <label className='form-control'>is {length/12} feet long,</label>
            <input className='form-control' type='text' id='length' placeholder='inches please (feet x 12)'></input>
            <label className='form-control'>{width/12} feet wide,</label>
            <input className='form-control' type='text' id='width' placeholder='inches please (feet x 12)'></input> 
            <label className='form-control'>and {thickness} inches thick...</label>
            <input className='form-control' type='text' id='thickness' placeholder='inches please (feet x 12)'></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
