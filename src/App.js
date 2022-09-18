import { useState } from 'react';
import { data } from './data';
import './App.css';
import { TravelList } from './TravelList';
import travel from './travel.jpg'
import trip from './trips.jpg'


function App() {

  const [country, setCountry] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const {id, name, description, image,} = data[country];

  const backCountry = () => {
    setCountry ((country => {
      country --;
      if(country < 0){
        return data.length-1
      }
      return country
    }))
  }
  const nextCountry = () => {
    setCountry((country => {
      country ++;
      if (country > data.length-1){
        country = 0
      }
      return country
    }))
  }
  
  return (
    <div>
      <div className='box'>
       <h1>Travel Planner</h1>
      </div>
      <div className='container'>
        <div className='block'>
          <div className='box'>
            <div className='image'>
          <img src={ image } alt="country" className='img'/>
            </div>
          </div>
          <div className='box'>
          <h2>{id} - {name}</h2>
          </div>
          <div className='box'>
          <p>{showMore ? description : description.substring(0, 60)+'...'}
          <button onClick ={()=> setShowMore(!showMore)} className='btn-show'>
            {showMore ? 'Show less' : 'Show more'}
          </button>
          </p>
          </div>
          <div className='btn-box'>
            <button onClick = { backCountry } className='btn'>Back</button>
            <button onClick = { nextCountry } className='btn'>Next</button>
          </div>          
        </div>
        <div className='block'>
        <div className='image-box-two'>
            <img src={ travel } width='150px'alt='stamp' className='img-two'/>
          </div> 
        <TravelList/> 
          <div className='image-box-one'>
            <img src={ trip } width='150px' alt='trip' className='img-one'/>
          </div>
         
        </div>   
      </div>
    </div>
  );
}

export default App;
