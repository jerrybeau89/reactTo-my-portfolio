import React, { useRef, useState } from 'react'
import Form from '../assets/js/Form.js'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [values, setValues] = useState({
          name: "",
          email: "",
          message: "",
      });

      const inputs = [
          {
              id: 1,
              name: "name",
              type: "text",
              placeholder: "Name",
              errorMessage: "Please provide your name!",
              label: "Name",
              required: true,
          },
          {
              id: 2,
              name: "email",
              type: "email",
              placeholder: "Email",
              errorMessage: "Please use a valid email format example@something.com!",
              label: "Email",
              required: true,
          },
          {
              id: 3,
              name: "message",
              type: "test",
              placeholder: "Message",
              errorMessage: "Please provide a message for why you are reaching out!",
              label: "Message",
              required: true,
          }
      ];

  const onChange = (e) => {
      console.log(e.target.value)
      setValues({ ...values, [e.target.name]: e.target.value })
  };

  const form = useRef();
    const [showMessage, setShowMessage] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        setTimeout(() => { setShowMessage(false) }, 5000)
        emailjs.sendForm(
            'service_7cx0qbj',
            'template_rhsmyzp',
            form.current,
            'usbKVnOe8fTRmVVXt')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent!");
                setShowMessage(true)

                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <>
    <div className='grid container my-5 text-center rounded'>
        <div className='card bg-secondary'>
          <h1 className='card-title bg-secondary'>Get in touch</h1>
          <form ref={form} className='h4' onSubmit={sendEmail}>
              {inputs.map((input) => (
                <Form key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                ))}
              <button className='btn btn-success text-light'>Submit</button>
              {showMessage && <p className='card-message rounded'>Message Sent!</p>}
          </form>
        </div>
    </div>
    </>
    );
  };
 
export default Contact;