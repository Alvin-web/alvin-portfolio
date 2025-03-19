import React from 'react';
import logo from '/src/assets/Untitled-1 copy-01.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Styles.css';

export default function Navbar() {
  return (
    <div>
      <nav id='nav'>
        <div className='navbar d-flex justify-content-between'>
          <div className="logo my-2 ms-3">
            <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>  

          <div className="d-flex">
            {/* <Link to='/' className="fs-5 link-hover pe-3 text-decoration-none align-items-end py-3">Home</Link> */}
            <Link to='/About' className=" fs-5 link-hover pe-3 text-decoration-none align-items-end py-3">About</Link>
            <Link to='/Contact' className="fs-5 link-hover pe-3 text-decoration-none align-items-end py-3">Contact</Link>
            <Link to='/Project' className="fs-5 link-hover pe-3 text-decoration-none align-items-end py-3">Projects</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
