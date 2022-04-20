import React, { useState } from 'react';

export default function Contact() {
 function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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


  const [nameForm, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [errorMessage, setErrorMessage] = useState('')



  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue)
    } else {
      setSubject(inputValue)
    }
  }

  const handleFocusOutName = (e) => {
    e.preventDefault();
    if (!nameForm) {
      setErrorMessage('Please enter a name.')
      return
    }else {
      setErrorMessage('')
    }
  }
  const handleFocusOutEmail = (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
      setErrorMessage('Enter valid email.')
      return
    }else {
      setErrorMessage('')
    }
  }
  const handleFocusOutSubject = (e) => {
    e.preventDefault();
    if(!subject) {
      setErrorMessage('Please enter a message,')
      return
    } else {
      setErrorMessage('')
    }
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (nameForm && validateEmail(email) && subject) {
      alert('Your message has been sent')
    } else {
      alert('Please check enter your information to send a message')
    }
    setEmail('')
    setName('')
    setEmail('')
    setErrorMessage('')
  }

  return (
    <div style={styles.mainDiv} >
        <form className="container col-12 col-lg-5 p-2 m-auto">
            <div className="form-group"> 
            <label for="name">Name:</label>
            <input 
            className="form-control p-2" 
            type="text"  
            id="name" 
            name="name"  
            onChange={handleInputChange} 
            onBlur={handleFocusOutName}
            value={nameForm}>
            
            </input>
            </div>
            <div className="form-group"> 
            <label for="email">Email:</label>
            <input 
            className="form-control" 
            type="email"
            id="email" 
            name="email"  
            onChange={handleInputChange}  
            onBlur={handleFocusOutEmail}
            value={email}>
            </input>
            </div>
            <div className="form-group"> 
            <label for="subject">Subject:</label>
            <textarea  
            className="form-control" 
            id="subject" 
            name="subject" 
            rows="2" cols="25"  
            onChange={handleInputChange}  
            onBlur={handleFocusOutSubject} 
            placeholder="Please leave a message."
            value={subject}></textarea>
            </div>
            <div className="form-grou text-center"> 
            <input  type="submit" onClick={handleFormSubmit} className="btn btn-secondary text-center m-2" value="Send">
            </input>
            </div>
        </form>
        {errorMessage && (
        <div className='text-center margin-auto display-4'>
          <p>{errorMessage}</p>
        </div>
      )}
       
    </div>
  );
}
