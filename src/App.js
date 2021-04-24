import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';
import animalData from './data/data.json';

function App() {
  const [countries, SetCountries]= useState([]);
  const[cart, SetCart]=useState([]);
  const [animal, setAnimal]=useState([]);
  useEffect(()=>{ 
    setAnimal(animalData);
    console.log(animalData);

  }, [])
  useEffect(()=>{ 
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>SetCountries(data))
    //.catch(error=>console.log(error)); //error deka dile avave dora jay
  },[])
  const handleAddCountry=(country)=>{
    const newCart =[...cart, country];
    SetCart(newCart); 
  
  };
  return (
    <div className="App">
     <h1>Country loaded:  {countries.length}</h1>
     <h3>Country added:{cart.length}</h3>
     <Cart cart={cart}></Cart>
     <ul> 
       { 
       countries.map(country=> <Country country={country} key={country.alpha3Code}  handleAddCountry={handleAddCountry}>{country.name}</Country>)
       }
       
        </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
