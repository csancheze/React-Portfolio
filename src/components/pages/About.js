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
  },
  text: {
    textAlign: 'justify'
  },
  mainDiv: {
    height: '100vh',
  }
}


export default function About() {
  return (
    <div style={styles.mainDiv}>
      <h1>About me</h1>
      <div style={styles.card} className="card bg-secondary text-light">
      <img style={styles.photo} className="card-img-left flex-shrink-0 p-2" src="./img/me.png" alt="Cesar Sanchez">
      </img>
      <p style={styles.text} className="card-text p-3">
      Hi! I am César. I am currently a Full Stack Web Developer student. I am learning fast to become an efficient developer. I want to be able to create friendly webpages and apps that make communication processes private and easy to use for personal and professional users. I am interested in part-time jobs and freelance projects that are both a challenge and fun. I am also a Clinical Psychologist with private practice. I like videogames, cats and almost every form of audiovisual entertainment.
      </p>
      </div>
    </div>
  );
}
