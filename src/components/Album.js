 import React, { Component } from 'react';
 import albumData from './../data/albums';
 import PlayerBar from './PlayerBar';


 class Album extends Component {
   constructor(props) {
     super(props);

     const album= albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

     this.state= {
       album:album,
       currentSong: album.songs[''],
       isPLaying: false,
       isMouseInside: false
     };
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }

play(){
  this.audioElement.play();
  this.setState({ isPlaying: true });
}

pause(){
  this.audioElement.pause();
  this.setState({ isPlaying: false});
}

setSong(song){
  this.audioElement.src = song.audioSrc;
  this.setState({ currentSong: song });
}

handleSongClick(song) {
  const isSameSong = this.state.currentSong === song;
  if (this.state.isPlaying && isSameSong) {
    this.pause();
  } else {
    if (!isSameSong) { this.setSong(song); }
    this.play();
  }
}

handlePrevClick() {
   const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
   const newIndex = Math.max(0, currentIndex - 1);
   const newSong = this.state.album.songs[newIndex];
   this.setSong(newSong);
   this.play();
}

handleIconToggle(song, index){
const isSameSong = this.state.currentSong === song;
if (this.state.isMouseInside=== index + 1 && !this.state.isPLaying && !isSameSong){
  return <span className="ion-md-play"></span>;
} else if(this.state.isMouseInside=== index + 1 && this.state.isPLaying ) {
  return <span className="ion-md-pause"></span>;
} else if (isSameSong && this.state.isPlaying){
  return <span className="ion-md-pause"></span>;
} else if(isSameSong && !this.state.isPlaying){
  return <span className="ion-md-play"></span>;
} else {
  return index + 1;
}

}


  render() {
    return (
      <section className="album">
      <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
        <div className="album-details">
          <h1 id="album-title">{this.state.album.title}</h1>
          <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.releaseInfo}</div>
        </div>
      </section>
      <table id="song-list" align="center">
        <colgroup>
          <col id="song-number-column" />
          <col id="song-title-column" />
          <col id="song-duration-column" />
        </colgroup>
      <tbody>
          <tr>
            <th colspan= "3"> SONGS: </th></tr>
          <tr>
            <th>Num</th>
            <th>Title</th>
            <th>Duration</th>
          </tr>

            {

            this.state.album.songs.map((song, index)=>

            <tr
              className="song"
              key={index}
              onClick={() => this.handleSongClick(song)}
              onMouseEnter={() => this.setState({ isMouseInside: index + 1 })}
              onMouseLeave={() => this.setState({ isMouseInside: false })} >

              <td className= "song-number">
              {this.handleIconToggle(song, index)}
              </td>
              <td className= "song-title"> {song.title}</td>
              <td className= "song-duration"> {song.duration}</td>
            </tr>
              )
            }




        </tbody>
      </table>
      <PlayerBar
      isPlaying={this.state.isPlaying}
      currentSong={this.state.currentSong}
      handleSongClick={() => this.handleSongClick(this.state.currentSong)}
      handlePrevClick={() => this.handlePrevClick()}
      />
      </section>
    );
  }
}

export default Album;
