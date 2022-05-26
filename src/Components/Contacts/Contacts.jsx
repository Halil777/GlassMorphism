import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';
import './Contacts.css'
import Hover3 from '../../hover3/Hover3';

const Contacts = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [ done, setDone ] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y72iqna', 'template_5d1bbko', form.current, 'w--8F8ypQmjt_fscB')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_email' className='user' placeholder='Name' />
                <input type='email' name='user_email' className='user' placeholder='Email' />
                <textarea  name='message' className='user' placeholder='Message' />
                <a href="" style={{width:"310px",color: darkMode? 'white' : '', borderRadius:'12px', textAlign:'center'}} className='bdn bdn2'>Send !!!</a>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{ background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contacts
