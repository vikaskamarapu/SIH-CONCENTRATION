import React from 'react';
import enhancement from '../images/enhancement.jpg';
import enhancement2 from '../images/enhancement2.jpg';
import {Outlet,Link} from 'react-router-dom'
import {faGamepad,faAirFreshener,faBahai} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import home from '../gifs/home.png'

function Enhacement() {

  return <div className='container mt-5' >
      <h1 className='text-center m-5'>CONCENTRATION ENHANCEMENT</h1>
       <div className="row mb-5 ">
           <div className="col-sm-6">
           <img src={enhancement} className='w-100 d-block mx-auto' />
           </div>
           <div className="col-sm-6 y text-white">
               <p className='text-center display-5'> TRAIN YOUR BRAIN</p>
               <p className='text-center display-5 '>GET YOUR GAME ON</p>
               <p className='text-center display-5 '>IMPROVE SLEEP</p>
               <p className='text-center display-5 '>VARY DIET</p>
               <p className='text-center display-5 '>DRINK CAFFEINE</p>
           </div>
       </div>
       <div className="row">
           <div className="col-sm-6 z text-white">
               <p className='text-center display-5 '>GIVE MEDITATION A TRY</p>
               <p className='text-center display-5 '>SPEND TIME IN NATURE</p>
               <p className='text-center display-5 '>LISTEN TO MUSIC</p>
               <p className='text-center display-5 '>CONCENTRATION WORKOUT</p> 
               <p className='text-center display-5 '>TRY SUPPLEMENTS</p>
           </div>
           <div className="col-sm-6">
           <img src={enhancement2} className='w-100 d-block mx-auto'/>
           </div>

       </div>

       <div className="row m-5 ">
           <div className="col-sm-4 ">
          
               <Link className='nav-link active text-center' to='meditation'> <p className='text-secondary x'><b><FontAwesomeIcon icon={faBahai}/> MEDITATION</b></p></Link>
       
           </div>
           <div className="col-sm-4">
           <Link className='nav-link active text-center' to='ambiance'><p className='text-secondary x' ><b><FontAwesomeIcon icon={faAirFreshener}/>  AMBIANCE</b></p></Link>
           </div>
           <div className="col-sm-4">
           <Link className='nav-link active text-center' to='games'><p className='text-secondary x'><b><FontAwesomeIcon icon={faGamepad}/> GAMES</b></p></Link>
           </div>
       </div>
    
       <Outlet/>
  </div>;
}

export default Enhacement;
