import React from 'react';

const Portfolio = () => {
    return (
      <>
      <div class="grid container my-5">
        <div class="row">
          <div class="col">
            <div class="row">
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://jerrybeau89.github.io/fried-green-tomatoes/">
                <img class="P1-img shadow-lg bg-dark float mx-auto" src={require('../assets/images/FGT-P1.png')} alt="Fried Green Tomatoes Movie Review Website"></img>
              </a>
              <h5>Fried Green Tomatoes</h5>
              <p>A Movie Search Database using HTML, CSS (Materialize), JS, jQuery and API's.</p>
            </div>
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://jerrybeau89.github.io/fried-green-tomatoes/">
                <img class="P2-img shadow-lg bg-dark float mx-auto" src={require("../assets/images/calculator.png")} alt="Fried Green Tomatoes Movie Review Website"></img>
              </a>
              <h5>Calculator</h5>
              <p>A standard calculator that can be moved around the screen.</p>
            </div>
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://careerfindr.herokuapp.com/">
                <img class="P3-img shadow-lg bg-dark float mx-auto" src={require("../assets/images/careerfindr.png")} alt="Image of how Node, ES6, and MySQL work together"></img>
              </a>
              <h5>CareerFindr</h5>
              <p>A job search database built using HTML, CSS, Node.js, Express.js, Sequelize, Mysql, and Handlebars</p>
            </div>
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://www.mongodb.com/mern-stack">
                <img class="P4-img shadow-lg bg-dark float mx-auto" src={require("../assets/images/Mernstack-React.jpeg")} alt="Image of MERN logo"></img>
              </a>
              <h5>Project 3</h5>
              <p>Mern Stack/React</p></div>
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://jquery.com">
                <img class="P5-img shadow-lg bg-dark float mx-auto" src={require("../assets/images/JQuery-JSON.jpeg")} alt="image of JSON, JQuery, and Ajax text"></img>
              </a>
              <h5>Place Holder 1</h5>
              <p>JQuery/JSON</p></div>
            <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
              <a class="card-link" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API">
                <img class="P6-img shadow-lg bg-dark float mx-auto" src={require("../assets/images/APIs.png")} alt="Image of robot arms putting the letters A, P, I, S together"></img>
                </a>
                <h5>Place Holder 2</h5>
                <p>APIs</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </>
    );
  };
 
export default Portfolio;