import React, { Component } from 'react';

export default class SearchForm extends Component {
  state = {
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const minLength = 2;

    if (value.length >= minLength) {
      this.setState({ isDisabled: false });
    }
  };

  render() {
    const { isDisabled } = this.state;

    return (
      <form>
        <input
          type="search"
          name="searchArtist"
          id="searchArtist"
          data-testid="search-artist-input"
          onChange={ this.handleChange }
        />

        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={ isDisabled }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}
