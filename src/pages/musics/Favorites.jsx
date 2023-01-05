import React, { Component } from 'react';
import { getFavoriteSongs } from '../../services/favoriteSongsAPI';

import Header from '../../components/layout/Header';
import Loading from '../../components/layout/Loading';
import MusicCard from './MusicCard';

export default class Favorites extends Component {
  state = {
    savedSongs: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.getSavedSongs();
  }

  getSavedSongs = async () => {
    this.setState({ isLoading: true }, async () => {
      const response = await getFavoriteSongs();
      this.setState({ savedSongs: response, isLoading: false });
    });
  };

  render() {
    const { savedSongs, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="page-favorites">
        <Header />

        {savedSongs.map((savedSong) => (
          <MusicCard
            music={ savedSong }
            trackId={ Number(savedSong.trackId) }
            isFavorite
            key={ savedSong.trackId }
            updateSongs={ this.getSavedSongs }
          />
        ))}
      </div>
    );
  }
}
