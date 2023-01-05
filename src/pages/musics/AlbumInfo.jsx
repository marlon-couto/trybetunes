import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AlbumInfo extends Component {
  render() {
    const { artistName, albumName } = this.props;

    return (
      <div>
        <h2 data-testid="artist-name">{artistName}</h2>
        <h3 data-testid="album-name">{albumName}</h3>
      </div>
    );
  }
}

AlbumInfo.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};
