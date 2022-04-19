import React from 'react';

const styles= {
  buttons: {
    textDecoration: "none",
    color: "white"
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">

      <li className="nav-item">
        <a 
          style={styles.buttons}
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link' : 'nav-link active text-dark'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.buttons}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link' : 'nav-link active text-dark'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.buttons}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link' : 'nav-link active text-dark'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
