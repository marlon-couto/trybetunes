import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoriteCheckbox extends Component {
  render() {
    const { trackId, handleChange, isChecked } = this.props;

    return (
      <label
        htmlFor={ `favorite${trackId}` }
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          type="checkbox"
          name={ `favorite${trackId}` }
          id={ `favorite${trackId}` }
          onChange={ handleChange }
          checked={ isChecked }
        />
        Favorita
      </label>
    );
  }
}

FavoriteCheckbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  trackId: PropTypes.number.isRequired,
};
