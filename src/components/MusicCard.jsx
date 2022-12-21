import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  state = {
    isChecked: false,
    isLoading: false,
  };

  handleChange = async () => {
    const { isChecked } = this.state;
    const { music } = this.props;

    if (!isChecked) {
      this.setState({ isChecked: true, isLoading: true }, async () => {
        await addSong(music);
        this.setState({ isLoading: false });
      });
    }
  };

  render() {
    const {
      music: { trackId, trackName, previewUrl },
    } = this.props;
    const { isChecked, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div>
        <h3>{trackName}</h3>

        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

        <label
          htmlFor={ `favorite-${trackId}` }
          data-testid={ `checkbox-music-${trackId}` }
        >
          Favoritas
          <input
            type="checkbox"
            name={ `favorite-${trackId}` }
            id={ `favorite-${trackId}` }
            onChange={ this.handleChange }
            checked={ isChecked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }).isRequired,
};
