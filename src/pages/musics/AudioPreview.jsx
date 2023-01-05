import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AudioPreview extends Component {
  render() {
    const { previewUrl } = this.props;

    return (
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
    );
  }
}

AudioPreview.propTypes = {
  previewUrl: PropTypes.string.isRequired,
};
