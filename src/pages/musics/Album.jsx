import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';
import getMusics from '../../services/musicsAPI';

import AlbumInfo from './AlbumInfo';
import Header from '../../components/layout/Header';
import Loading from '../../components/layout/Loading';
import MusicCard from './MusicCard';

export default class Album extends Component {
  state = {
    musics: [],
    artistName: '',
    albumName: '',
    savedSongs: [],
    isLoading: false,
  };

  componentDidMount() {
    this.getSavedSongs();
    this.getMusicsById();
  }

  updateSongs = () => {};

  getSavedSongs = async () => {
    this.setState({ isLoading: true }, async () => {
      const response = await getFavoriteSongs();
      this.setState({ isLoading: false, savedSongs: response });
    });
  };

  getMusicsById = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    const response = await getMusics(id);

    this.setState({
      musics: response.slice(1),
      artistName: response[0].artistName,
      albumName: response[0].collectionName,
    });
  };

  isFavoriteSong = (trackId) => {
    const { savedSongs } = this.state;
    return savedSongs.some((savedSong) => savedSong.trackId === trackId);
  };

  render() {
    const { isLoading, musics, artistName, albumName } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="page-album">
        <Header />

        <AlbumInfo
          artistName={ artistName }
          albumName={ albumName }
        />

        {musics.map((music) => {
          const { trackId } = music;

          return (
            <MusicCard
              music={ music }
              isFavorite={ this.isFavoriteSong(trackId) }
              key={ trackId }
              trackId={ Number(trackId) }
              updateSongs={ this.updateSongs }
            />
          );
        })}
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
