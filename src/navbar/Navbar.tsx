import { useState } from "react";
import menuBar from "../assets/menu.svg";
import './Navbar.css'

function Navbar() {

      // State to track visibility
  const [showDiv, setShowDiv] = useState(false);

  // Toggle visibility
  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <section className='navbarWrapper '>
        <div className='container-fluid'>
            <div className='row align-items-center'>
                <div className='col-md-2 col-5'>
                    <h6 className='navbarTitle'>Reshmi M V</h6>
                </div>
                <div className='col-md-8 col-7'>
                    <button className='navbarToggler' onClick={toggleDiv}>{showDiv ? <img src={menuBar} /> : <img src={menuBar} />}</button>
                    {showDiv && (
                    <ul className='navbarItem navbarItemMobile'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Education</a></li>
                        <li><button className='navbarProfileBtn'>Github Profile</button></li>
                    </ul>
                    )}
                    <ul className='navbarItem navbarItemDesktop'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Education</a></li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <button className='navbarProfileBtn'>Github Profile</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
