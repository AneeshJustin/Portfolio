import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const Navbar = () =>  {
     return (
    
      <nav className='Navbar'>
      <ul className='nav-bar-links'>
        <li>
           <a href="/">  <HomeIcon style={{ verticalAlign: 'middle', marginRight: '5px' }} />Home </a> 
        </li>
        <li> 
          <Link to =  "about" smooth={true} duration={500}> <InfoIcon/> About</Link> 
        </li>
        <li> 
          <Link to = "contact" smooth = {true} duration={500}> <ConnectWithoutContactIcon/>Contact</Link>
        </li>
        <li>
           <Link to = "service" smooth = {true} duration={500}> <HomeRepairServiceIcon/>Services</Link>  
        </li>
      </ul> 
      </nav>
  )

}


export default Navbar
