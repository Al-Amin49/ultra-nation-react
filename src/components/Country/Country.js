// rsc=>statless component skeleton (shortcut way component lekar)
// tar jonno reactjs code snippets extension add kora lagbe
import React from 'react';
const Country=(props)=>{ 
    const {name, population, region, flag}=props.country;
    const flagStyle={ 
        height:'50px'
    }
    const  countryStyle={border:'1px solid red', margin:'10px', padding:'10px'}
    const handleAddCountry =props.handleAddCountry;

    return ( 
    
        <div style={countryStyle}> 

            
            <h4>This is a country {name}</h4>
            <img style ={flagStyle} src={flag} alt =""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country </button>


{/*   
//aktu shortkorar jonno upore destructure use kora hoise          
            <h4>This is a country {props.country.name}</h4>
            <p>Population: {props.country.population}</p>
            <p><small>Region: {props.country.region}</small></p> */}
            
        </div>
    );
};
export default Country;