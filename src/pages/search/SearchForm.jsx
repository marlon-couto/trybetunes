import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    const { searchValue, isDisabled, handleChange, handleClick } = this.props;

    return (
      <form>
        <input
          type="search"
          name="searchArtist"
          id="searchArtist"
          data-testid="search-artist-input"
          onChange={ handleChange }
          value={ searchValue }
        />

        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
};
