import React, { Component } from 'react';
// import albumData from './../data/albums';
// import './PlayerBar.css';

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
     console.log('song is this >>> ', this.props.song)
  }

  onMouseLeaveHandler(song, currentSong) {
    if ( song && (song === currentSong) && this.props.isPlaying ) {
      this.setState({isHovered: true});
    } else if ( song ) {
      this.setState({isHovered: false});

    }

  }

  render() {
    return (
      <div>

        <span
          onMouseEnter={() => this.onMouseEnterHandler(this.props.song, this.props.currentSong)}
          onMouseLeave={() => this.onMouseLeaveHandler(this.props.song, this.props.currentSong)}

          className={

            this.state.isHovered && (this.props.song === this.props.currentSong) && this.props.isPlaying
            ? "ion-pause"
            : this.state.isHovered && (this.props.song === this.props.currentSong) && !this.props.isPlaying
            ? "ion-play"
            : this.state.isHovered && (this.props.song !== this.props.currentSong)
            ? "ion-play"
            : (this.props.song === this.props.currentSong) && this.props.isPlaying
            ? "ion-pause"
            : "song-number"
          }
          >
          {
            this.state.isHovered
            ? null
            : (this.props.song === this.props.currentSong) && (this.props.isPlaying)
            ? null
            : this.props.index + 1
          }

        </span>
      </div>
    )
  }
}






export default PlayButton;
