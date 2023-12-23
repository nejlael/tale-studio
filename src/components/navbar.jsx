import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const links = [
      {
        label: 'Home',
        link: '/'
      },
      {
        label: 'Services',
        link: '/services'
      },
      {
        label: 'Devis',
        link: '/devis'
      },
      {
        label: 'Contact',
        link: '/contact'
      },
    ];
  
    links.forEach((item) => {
      console.log(item)
    })
  
    return (
      <nav>
        <div className="logo">
          <img src="/images/TALE.png" alt="LOGO" />
        </div>
        <div className="menu">
          <ul>
            {links.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;