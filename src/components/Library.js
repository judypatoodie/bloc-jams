import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props) {
    super(props);

   this.state = { albums: albumData };
  }

  render() {
     return (

       <section className="library" id="library">

         {
           this.state.albums.map( (album, index) =>

              <div className="card flex-row flex-wr" style={{width: '12rem', height: '12rem'}}>

                 <img className="card-img-top" src={album.albumCover} alt={album.title} />
                   <div className="card-body">
                     <div style={{width: '18rem'}}>
                       <h4 class="card-title">{album.title}</h4>
                     </div>
                     <div className="card-text">
                       {album.artist} | {album.songs.length} songs
                     </div>
                     <Link to={`/album/${album.slug}`} key={index}>
                       <div className="btn btn-primary" style={{ marginTop: '1rem' }}>
                         View Album
                       </div>
                    </Link>
                  </div>
               </div>
           )
         }
       </section>

    );
  }
}

export default Library
