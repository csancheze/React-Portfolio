import React from 'react';
import Project from '../Project';
import projects from './projects';


const renderCards = () => {
  for (let i=0; i<projects.length; i++) {
    return <Project name={projects[i].name} url={projects[i].url} img={projects[i].img} github={projects[i.github]} caption={projects[i].caption}/>
}
}

export default function Portfolio() {
  return (
    <div >
      <h1>Portfolio</h1>
      <div className="d-flex justify-content-center flex-column flex-md-row flex-wrap container">
      {renderCards()} 
      </div>
    </div>
  );
}
