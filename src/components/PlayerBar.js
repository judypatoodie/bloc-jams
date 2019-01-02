import React, { Component } from 'react';

 class PlayerBar extends Component {
   render() {
     return (
       <section className="player-bar">
         <section id="buttons" style={{display: 'flex', justifyContent: 'center'}}>
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-md-skip-backward" style={{ fontSize: '30px'}}></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'} style={{ fontSize: '30px', color:'#8da38c'}}></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-md-skip-forward" style={{ fontSize: '30px'}}></span>
          </button>
        </section>
      <section id="time-control" style={{display: 'flex', justifyContent: 'center'}}>

        {this.props.formatTime(this.props.currentTime)}

          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />

            {this.props.formatTime(this.props.duration)}

      </section>

          <section id="volume-control" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="volume" />
              <ion-icon name="volume-mute"></ion-icon>
            <input
              type="range"
              className="seek-bar"
              value={this.props.volume}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
          <ion-icon name="volume-high"></ion-icon>
          </section>
       </section>
     );
   }
 }

 export default PlayerBar;
