import React, { Component } from 'react';
import './PlayButton.css';

class PlayButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    }
  };

  onMouseEnterHandler(song, currentSong) {
     if (song) {
       this.setState({isHovered: true});
     }
  }

  onMouseLeaveHandler(song, currentSong) {
    if (song) {
      this.setState({isHovered: false});
    }
  }

  render() {

    const currentSong = this.props.song === this.props.currentSong;
    let className;
      if ( this.props.isPlaying && currentSong ){
        className = "ion-pause";
      } else if ((this.props.isPlaying && this.state.isHovered && !currentSong)
      || (!this.props.isPlaying && this.state.isHovered && !currentSong)
      || (!this.props.isPlaying && this.state.isHovered && currentSong)) {
        className = "ion-play";
      } else {
        className = "song-number";
      }

    return (
      <div>

        <span
          onMouseEnter={() => this.onMouseEnterHandler(this.props.song, this.props.currentSong)}
          onMouseLeave={() => this.onMouseLeaveHandler(this.props.song, this.props.currentSong)}
          className={ className }
          >

          {
            this.state.isHovered || (currentSong && this.props.isPlaying)
            ? ''
            : this.props.index + 1
          }

        </span>
      </div>
    )
  }
}

export default PlayButton;
