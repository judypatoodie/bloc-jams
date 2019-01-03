 import React, { Component } from 'react';
 import albumData from './../data/albums';
 import PlayerBar from './PlayerBar';
 import albumCoverimg from './../img/01.jpg'


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
       currentTime: 0,
       volume: 0,
       duration: album.songs[0].duration,
       isMouseInside: false,
       songLength: album.songs.length
     };
     this.audioElement = document.createElement('audio');
     this.audioElement.src = album.songs[0].audioSrc;
   }

componentDidMount() {
  this.eventListeners = {
    timeupdate: e => {
      this.setState({ currentTime: this.audioElement.currentTime });
    },
    durationchange: e => {
      this.setState({ duration: this.audioElement.duration });
    },
    volumechange: e=> {
      this.setState({ volume: this.audioElement.volume});
    }
  };
  this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
  this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
  this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);

}

componentWillUnmount() {
  this.audioElement.src = null;
  this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
  this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
  this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
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

handleNextClick() {
   const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
   const nextSong= currentIndex + 1;
   const num = this.state.songLength;
   const newIndex = nextSong < num? nextSong : num - 1;
   const newSong = this.state.album.songs[newIndex];
   this.setSong(newSong);
   this.play();
}

handleTimeChange(e){
  const newTime= this.audioElement.duration * e.target.value;
  this.audioElement.currentTime = newTime;
  this.setState({ currentTime: newTime});
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

handleVolumeChange(e){
  const newVolume = e.target.value;
  this.audioElement.volume = newVolume;
  this.setState({ volume: newVolume });
}

formatTime(time){
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return (minutes < 10 ? +minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
}


  render() {
    return (


      <section className="album" >

        <div className="card flex-row flex-wr " >

        <img className="card-img-top" id="album-cover-art" style={{width: '40rem', height: '40rem'}} src={albumCoverimg} alt={this.state.album.title}/>


      <div className="album-details card-body">
          <h1 id="album-title" >{this.state.album.title}</h1>

          <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.releaseInfo}</div>



      <table className="table table-hover table-striped table-dark" id="song-list" style={{marginTop:'3rem'}}>
        <colgroup>
          <col id="song-number-column" />
          <col id="song-title-column" />
          <col id="song-duration-column" />
        </colgroup>
      <tbody>

          <tr style={{backgroundColor:'#000'}}>
            <th>#</th>
            <th>Song</th>
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
              <td className= "song-duration"> {this.formatTime(song.duration)}</td>
            </tr>
              )
            }

        </tbody>
      </table>

      <PlayerBar
      isPlaying={this.state.isPlaying}
      currentSong={this.state.currentSong}
      currentTime={this.audioElement.currentTime}
      duration={this.audioElement.duration}
      volume={this.audioElement.volume}
      handleSongClick={() => this.handleSongClick(this.state.currentSong)}
      handlePrevClick={() => this.handlePrevClick()}
      handleNextClick={() => this.handleNextClick()}
      handleTimeChange={(e) => this.handleTimeChange(e)}
      handleVolumeChange={(e) => this.handleVolumeChange(e)}
      formatTime={time => this.formatTime(time)}

      />
          </div>
        </div>
      </section>



    );
  }
}

export default Album;
