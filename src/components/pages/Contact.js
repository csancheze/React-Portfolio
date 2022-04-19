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
    <div style={styles.mainDiv} >
        <form className="container col-12 col-lg-5 p-2 m-auto">
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
