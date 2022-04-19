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
      <h1>Cesar Sanchez Portfolio</h1>
      <div style={styles.nav}>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      </header>
      {renderPage()}
    </div>
  );
}
