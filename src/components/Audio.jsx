import React from "react";
import { connect } from "react-redux";

import { toggleAudio } from "../store/actions";

class Audio extends React.Component {
  constructor(props) {
    super(props);

    this.audio = null;
    this.playing = false;
  }

  componentDidMount() {
    if (this.audio === null) {
      this.audio = document.getElementById("beep");
      this.audio.addEventListener("ended", this.handleAudioEnd);
    }
  }

  componentDidUpdate() {
    const { audioPlaying } = this.props;
    if (audioPlaying && !this.playing) {
      this.audio.play();
    } else if (!audioPlaying) {
      this.stopAudio();
    }
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", this.handleAudioEnd);
  }

  stopAudio = () => {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playing = false;
  };

  handleAudioEnd = () => {
    this.stopAudio();
    this.props.toggleAudio(false);
  };

  render() {
    const audioSource = `${process.env.PUBLIC_URL}/audio/beep.wav`;
    return (
      <audio
        id="beep"
        src={audioSource}
        type="audio/wav"
        preload="auto"
      ></audio>
    );
  }
}

const mapStateToProps = ({ timer }) => {
  return {
    audioPlaying: timer.audioPlaying,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAudio(isPlaying) {
      dispatch(toggleAudio(isPlaying));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
