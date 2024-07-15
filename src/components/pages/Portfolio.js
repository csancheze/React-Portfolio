import React from 'react';
import Project from '../Project';
import projects from './projects';


const styles = {
mainDiv: {
  height: 'max-content',
  paddingBottom: '100px'
},
}

export default function Portfolio() {
  return (
    <div style ={styles.mainDiv} >
      
      <h1 className="m-auto text-center">Portfolio</h1>
      

      <div className="d-flex justify-content-center flex-column flex-md-row flex-wrap container">
        
      {
        projects.map((project) => (
          <Project name={project.name} url={project.url} img={project.img} github={project.github} caption={project.caption} description={project.description}/>
        ))
      }
      </div>
    </div>
  );
}