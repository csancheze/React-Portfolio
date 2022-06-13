import React from 'react';
import './cards.css';


const styles= {
  caption: {
    fontSize:'x-small',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: '2em',
    whiteSpace: 'nowrap'
  },
  appTitle: {
    textDecoration: 'none',
    color: 'white'

  },
  text: {
    fontSize: 'small',
    overflowX: 'auto',
    overflowY: 'hidden',
    height: '2em',
    whiteSpace: 'nowrap'
  }
}

export default function Project(props) {
  return (
   
    <figure className=" m-2 card bg-secondary text-light col-md-5 col-lg-3 justify-content-between my_cards">
      <a className="w-100 h-100 img-link" href={props.url} target="_blank" rel="noreferrer">
      <img className="img-thumbnail m-auto w-100 h-100" src={`./img/${props.name}.png`}alt="Webpage"></img>
      </a>
      <div className="card-text p-1">
         <a style= {styles.appTitle} target="_blank" rel="noreferrer" href={`https://github.com/csancheze/${props.github}`}>
           <h4>{props.name} <i className="fab fa-github"></i></h4></a>
        <figcaption style={styles.caption}>{props.caption} </figcaption>
        <p style={styles.text}>{props.description}</p>
      </div>
    </figure>            
    
  );
}
