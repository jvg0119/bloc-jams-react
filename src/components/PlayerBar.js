import React, { Component } from 'react';

class PlayerBar extends Component {

  render() {
    return (
      <div>
        <section className="player-bar">

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
            {/*<div className="current-time">–:––</div>*/}
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
              {/* <input type="range" className="seek-bar" value="0" /> */}
              <input
                type="range"
                className="seek-bar"
                value={(this.props.currentTime / this.props.duration) || 0}
                max='1'
                min='0'
                step='.01'
                onChange={this.props.handleTimeChange}
              />
              <p>{/*this.props.currentTime*/}</p>

            {/* <div className="total-time">–:––</div> */}
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>

          <section id="volume-control">
            <div className="icon ion-volume-low"></div>
              <input
                type="range"
                className="seek-bar"
                value={this.props.volume}
                max='1'
                min='0'
                step='.01'
                onChange={this.props.handleVolumeChange}
              />
              <p>volume: {this.props.volume}</p>
            <div className="icon ion-volume-high"></div>
          </section>

        </section>
      </div>
    )
  }
}


export default PlayerBar;
