import React from 'react';

const styles = {
  mainDiv: {
    height: '100vh',
  },
  list: {
    listStyle: 'none'
  },
  buttons: {
    textDecoration: "none",
    color: "white"
  }
}


export default function Contact() {
  return (
    <div style={styles.mainDiv} className="d-flex flex-column justify-content-around">
        <div className="col-12 col-lg-5 w-lg-50 m-auto">
        <h3 className="text-center m-auto" id="contact">
            Contact me
        </h3>
        <ul  style={styles.list}className="p-2 d-flex flex-row justify-content-around">
            <li className="col-2 display-6 m-1 p-1 text-center" >
                <a  style={styles.buttons} href="mailto:scuadra.it@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope-square"></i></a>
            </li>
            <li className="col-2 display-6 m-1 p-1 text-center">
                <a style={styles.buttons} href="https://github.com/csancheze" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            </li>
            <li className="col-2 display-6 m-1 p-1 text-center">
                <a style={styles.buttons} href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="col-2 display-6 m-1 p-1 text-center">
                <a style={styles.buttons} href="https://wa.me/5215510817016" target="_blank" rel="noreferrer"> <i className="fab fa-whatsapp"></i></a>
            </li>
            <li className="col-2 display-6 m-1 p-1 text-center">
                <a style={styles.buttons} href="https://www.linkedin.com/in/cesar-san-developer/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin"></i></a>
            </li>
            

        </ul>
      </div>
    
        <form className="container col-12 col-lg-5 p-2 m-auto">
            
            <h5>Or, if you prefer to be reached, please leave your contact info below.</h5>
            <div className="form-group"> 
            <label for="name">Name:</label>
            <input className="form-control p-2" type="text"  id="name" name="name">
            </input>
            </div>
            <div className="form-group"> 
            <label for="email">Email:</label>
            <input className="form-control" type="email" id="email" name="email">
            </input>
            </div>
            <div className="form-group"> 
            <label for="subject">Subject:</label>
            <textarea  className="form-control" id="subject" name="subject" rows="2" cols="25" placeholder="Please leave a message."></textarea>
            </div>
            <div className="form-grou text-center"> 
            <input id="js_send" type="submit" className="btn btn-secondary text-center m-2" value="Send">
            </input>
            </div>
            <p>Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noreferrer">PostMail</a></p>
        </form>
       
    </div>
  );
}
