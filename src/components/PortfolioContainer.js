import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
},
  nav: {
    textAlign: 'right',
  },
  mainDiv: {
    background: '#212529',
    color: '#9B9D9E',
    height: "100%",
    fontFamily: "'Roboto Mono', monospace",
    fontSize: '1.0em',
    lineHeight: '1.5'

  },
  list: {
    listStyle: 'none'
  },
  buttons: {
    textDecoration: "none",
    color: "white"
  },
  footer: {
    background:'#212529',
    height: '70px',
  }
}

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={styles.mainDiv} >
      <header style={styles.header} className="d-flex flex-column flex-md-row">
      <h1>CS Portfolio</h1>
      <div style={styles.nav}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      </header>
      {renderPage()}
      <footer style={styles.footer} className='fixed-bottom '>
      <div className="col-12 col-lg-5 w-lg-50 m-auto">
        <ul  style={styles.list}className="p-2 d-flex flex-row justify-content-around">
            <li className="col-2 display-6 p-1 text-center" >
                <a  style={styles.buttons} href="mailto:scuadra.it@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope-square"></i></a>
            </li>
            <li className="col-2 display-6 p-1 text-center">
                <a style={styles.buttons} href="https://github.com/csancheze" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            </li>
            <li className="col-2 display-6 p-1 text-center">
                <a style={styles.buttons} href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="col-2 display-6 p-1 text-center">
                <a style={styles.buttons} href="https://wa.me/5215510817016" target="_blank" rel="noreferrer"> <i className="fab fa-whatsapp"></i></a>
            </li>
            <li className="col-2 display-6 p-1 text-center">
                <a style={styles.buttons} href="https://www.linkedin.com/in/cesar-san-developer/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i></a>
            </li>
        </ul>
      </div>
      </footer>
    </div>
  );
}
