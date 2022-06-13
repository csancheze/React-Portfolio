
import React from 'react';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px'
  },
  photo: {
    width: '130px',
    height: '140px',
    borderRadius: '25px',
    alignSelf: 'center',
    margin: '5px',
    float: 'left',

  },
  text: {
    textAlign: 'justify',
    marginBottom: '200px'

  },
  mainDiv: {
    height: '100%',
    paddingBottom: '50px'
  }
}


export default function About() {
  return (
    <div style={styles.mainDiv}>
      <h1 className="m-auto text-center">About me</h1>
      <div style={styles.card} className="card bg-secondary text-light">
      
      <p style={styles.text} className="card-text p-3"><img style={styles.photo} className="card-img-left flex-shrink-0 p-2" src="./img/me.png" alt="Cesar Sanchez">
      </img>
      Hi! I am César. <br></br>

Web Developer with analytical skills developed by a solid background in clinical psychology. Recently finished successfully a Full-Stack Web Development Bootcamp. Adquired and developed skills in HTML, CSS, JavaScript, MongoDB/Mongoose, Node/Express.js, and React/GraphQL. I have always been passionate about problem solving and goal-oriented. In Web Development, this translates to hard work, unrelenting search for solutions and creative thinking to surpass barriers and blocks. I am skillful on setting up the Front-end while most of the time I end up working on the Back-end and the connection between both due to feeling more comfortable and confident than my peers. This was the case in a single-page MERN App project in which I have recently participated. My objective is to create responsive, useful and friendly web applications as I continue learning how to do it more efficiently.
<br></br>
I am interested in part-time jobs and freelance projects that are both a challenge and fun. I am also a Clinical Psychologist with private practice. I like videogames, cats and almost every form of audiovisual entertainment.
      </p>
      </div>
    </div>
  );
}
