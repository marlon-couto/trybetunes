import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  state = {
    musics: [],
    artistName: '',
    albumName: '',
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const result = await getMusics(id);

    this.setState({
      musics: result,
      artistName: result[0].artistName,
      albumName: result[0].collectionName,
    });
  }

  render() {
    const { musics, artistName, albumName } = this.state;

    return (
      <div data-testid="page-album">
        <Header />

        <div>
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{albumName}</h3>
        </div>

        <MusicCard musics={ musics } />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
