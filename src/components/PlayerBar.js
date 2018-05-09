import React, { Component } from 'react';
import './Library.css';
import './PlayerBar.css'

class PlayerBar extends Component {

  render() {
    return (
        <div className="player-bar">
          <span className="player-bar-title">{this.props.currentSong.title}</span>
          <span className="player-bar-artist">{this.props.album.artist}</span>
          <section id="buttons">
            <button id="previous"
              onClick={this.props.handlePrevClick}>
              <span className="ion-skip-backward"></span>
            </button>

            <button id="play-pause"
              onClick={this.props.handleSongClick}>
                <span className={this.props.isPlaying
                  ? "ion-pause"
                  : "ion-play"}>
                </span>
            </button>

            <button id="next"
              onClick={this.props.handleNextClick}>
              <span className="ion-skip-forward"></span>
            </button>
          </section>

          <section id="time-control">

              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max='1'
                min='0'
                step='.01'
                onChange={this.props.handleTimeChange}
              />

            <div className="time-control-status">
              <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
              <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
            </div>

          </section>

          <section id="volume-control">

              <input
                type="range"
                className="seek-bar"
                value={this.props.volume}
                max='1'
                min='0'
                step='.01'
                onChange={this.props.handleVolumeChange}

              />
              {/* <p>volume: {this.props.volume}</p> */}
            <div className="volume-control-status">
              <div className="icon ion-volume-low"></div>
              <div className="icon ion-volume-high"></div>
            </div>

          </section>

        </div>
    )
  }
}


export default PlayerBar;
