import React from 'react';

const styles= {
  caption: {
    fontSize:'x-small'
  }
}

export default function Project(props) {
  return (
    <div className="d-flex justify-content-center flex-column flex-md-row flex-wrap container">
    <figure className="card bg-secondary text-light col-md-6 col-lg-4 ustify-content-between my_cards">
      <a className="w-100 h-100 img-link" href={props.url} target="_blank" rel="noreferrer">
      <img className="img-thumbnail m-auto w-100 h-100" src={`./img/${props.name}.png`}alt="Webpage"></img>
      </a>
      <div className="card-text p-1">
         <a target="_blank" rel="noreferrer" href={`https://github.com/csancheze/${props.github}`}>
           <h4>{props.name} <i className="fab fa-github"></i></h4></a>
        <figcaption style={styles.caption}>{props.caption} </figcaption>
      </div>
      </figure>            
    </div>
  );
}
