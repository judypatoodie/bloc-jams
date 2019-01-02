import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Landing.css';

const Landing = () => (
  <section className="landing" id="landing">

          <section className="landing">
          <div> <h1> Perks </h1>
          </div>
          <div class="row wrapper">
            <div className="card text-white bg-dark ">
              <h2 className="card-header"><ion-icon name="musical-notes" large ></ion-icon> Choose your music</h2>
              <p className="card-body alert-secondary">The world is full of music; why should you have to listen to music that someone else chose?</p>
            </div>
            <div className="card text-white bg-dark " >
              <h2 className="card-header"><ion-icon name="infinite"></ion-icon> Unlimited, streaming, ad-free</h2>
              <p className="card-body alert-secondary">No arbitrary limits. No distractions.</p>
            </div>
            <div className="card text-white bg-dark" >
              <h2 className="card-header"> <ion-icon name="phone-portrait"></ion-icon> Mobile enabled</h2>
              <p className="card-body alert-secondary"> Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
              </div>
            </div>
          </section>




  </section>
);

export default Landing;
