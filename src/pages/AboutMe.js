import React from 'react';
import pic from "../assets/images/Avatar.jpeg"

const AboutMe = () => {

  let bio = 'My name is Beau and I am a fitness enthusiast with a passion for Full-Stack Development. I am a driven and motivated professional with a diverse background. I recently changed fields and am expanding my skills as a developer. Please feel free to contact me if you have questions or need assistance with anything! Thank you for visiting my portfolio!';

    return (
      <>
         <section className='container col-10 my-2 text-end rounded'> 
          <div className='card bg-secondary'>
            <img src={pic} className='card-img-top m-2' id='avatar' alt='my profile'/>
            <div className='card-body'>
              <h3 className='card-title'>
                <p className='card-text'>Hello!!</p>
              </h3>
              <p>
                {bio}
              </p>
            </div>
          </div>
        </section> 
      </>
    );
  };
 
export default AboutMe;