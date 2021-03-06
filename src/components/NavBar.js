import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '25 px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
    <ul>
    <li><NavLink to='/'>Home</NavLink></li>
        

       
    <li><NavLink to='/movies'>Movies</NavLink></li>
     

       
    <li><NavLink to='/directors'>Directors</NavLink></li>
       

 
    <li><NavLink to='/actors'>Actors</NavLink></li>
    </ul>   

    
    </div>
  );
};

export default NavBar;
