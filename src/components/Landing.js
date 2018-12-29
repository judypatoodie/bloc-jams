import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
const Landing = () => (
  <section className="landing" id="landing">
          <section className="landing" id="librarySection" >
          <div class="row">
            <div className="card text-white bg-dark mb-3 col-md-4" style={{"width" : "15%"}}>
              <h2 className="card-header"><ion-icon name="musical-notes"></ion-icon>Choose your music</h2>
              <p className="card-body">The world is full of music; why should you have to listen to music that someone else chose?</p>
            </div>
            <div className="card text-white bg-dark mb-3 col-md-4" style={{"width" : "15%"}}>
              <h2 className="card-header">Unlimited, streaming, ad-free</h2>
              <p className="card-body">No arbitrary limits. No distractions.</p>
            </div>
            <div className="card text-white bg-dark mb-3 col-md-4" style={{"width" : "15%"}}>
              <h2 className="card-header"> Mobile enabled</h2>
              <p className="card-body"> Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
              </div>
            </div>
          </section>




  </section>
);

export default Landing;
