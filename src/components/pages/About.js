
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
    paddingBottom: '50px',
    backgroundColor: "#212529"
  }
}


export default function About() {
  return (
    <div style={styles.mainDiv}>
      <div aria-live="polite" aria-atomic="true" style={{position: "relative", "minHeight": "200px", display:"block"}}>
            <div className="card" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="mr-auto">Portfolio</strong>
                </div>
                <div className="toast-body">
                  My heroku is down, so the projects that required a working back-end are not working.
                </div>
              </div></div>
      <h1 className="m-auto text-center">About me</h1>
      <div style={styles.card} className="card bg-secondary text-light">
        
      
      <p style={styles.text} className="card-text p-3"><img style={styles.photo} className="card-img-left flex-shrink-0 p-2" src="./img/me.png" alt="Cesar Sanchez">
      </img>
      Hi! I am César. <br></br>

Web Developer working on back-end microservices for more than 2 years. Adquired and developed skills in HTML, CSS, JavaScript, MongoDB/Mongoose, Node/Express.js, and React/GraphQL. I have always been passionate about problem solving and goal-oriented. In Web Development, this translates to hard work, unrelenting search for solutions and creative thinking to surpass barriers and blocks. I am skillful on setting up the Front-end while most of the time I end up working on the Back-end and the connection between both. This was the case in a single-page MERN App project in which I have recently participated. My objective is to create responsive, useful and friendly web applications as I continue learning how to do it more efficiently.
<br></br>
I am interested in full-time jobs, part-time jobs and freelance projects that are both a challenge and fun. I like videogames, cats and almost every form of audiovisual entertainment.
      </p>
      </div>
    </div>
  );
}
