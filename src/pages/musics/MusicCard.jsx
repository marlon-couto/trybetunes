import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../../services/favoriteSongsAPI';

import AudioPreview from './AudioPreview';
import FavoriteCheckbox from './FavoriteCheckbox';
import Loading from '../../components/layout/Loading';

export default class MusicCard extends Component {
  state = {
    isChecked: false,
    isLoading: false,
  };

  componentDidMount() {
    this.checkFavoriteSong();
  }

  checkFavoriteSong = () => {
    const { isFavorite } = this.props;
    this.setState({ isChecked: isFavorite });
  };

  addFavoriteSong = (music) => {
    this.setState({ isChecked: true, isLoading: true }, async () => {
      await addSong(music);
      this.setState({ isLoading: false });
    });
  };

  removeFavoriteSong = (music) => {
    const { updateSongs } = this.props;

    this.setState({ isChecked: false, isLoading: true }, async () => {
      await removeSong(music);
      updateSongs();
      this.setState({ isLoading: false });
    });
  };

  handleChange = () => {
    const { isChecked } = this.state;
    const { music } = this.props;

    if (!isChecked) {
      this.addFavoriteSong(music);
    } else {
      this.removeFavoriteSong(music);
    }
  };

  render() {
    const {
      music: { trackName, previewUrl },
      trackId,
    } = this.props;

    const { isChecked, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div>
        <h3>{trackName}</h3>

        <AudioPreview previewUrl={ previewUrl } />

        <FavoriteCheckbox
          handleChange={ this.handleChange }
          trackId={ Number(trackId) }
          isChecked={ isChecked }
        />
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  }).isRequired,
  trackId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  updateSongs: PropTypes.func.isRequired,
};
