import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

export default class Album extends Component {
  state = {
    musics: [],
    artistName: '',
    albumName: '',
    savedSongs: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.getSavedSongs();
    this.getMusicsById();
  }

  getSavedSongs = async () => {
    this.setState({ isLoading: true }, async () => {
      const result = await getFavoriteSongs();
      this.setState({ isLoading: false, savedSongs: result });
    });
  };

  getMusicsById = async () => {
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
  };

  render() {
    const { savedSongs, isLoading, musics, artistName, albumName } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="page-album">
        <Header />

        <div>
          <h2 data-testid="artist-name">{artistName}</h2>
          <h3 data-testid="album-name">{albumName}</h3>
        </div>

        {musics.slice(1).map((music) => (
          <div key={ music.trackId }>
            <MusicCard
              music={ music }
              savedSongs={ savedSongs }
            />
          </div>
        ))}
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
