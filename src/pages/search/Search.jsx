import React, { Component } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';

import Header from '../../components/layout/Header';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

export default class Search extends Component {
  state = {
    isDisabled: true,
    searchValue: '',
    searchResponse: [],
    isLoading: false,
    artist: '',
    buttonClicked: false,
  };

  inputValidation = (value) => {
    const minLength = 2;
    if (value.length >= minLength) {
      this.setState({ isDisabled: false });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState(
      {
        searchValue: value,
        isDisabled: true,
      },
      () => this.inputValidation(value),
    );
  };

  handleClick = async () => {
    const { searchValue } = this.state;

    this.setState(
      {
        buttonClicked: true,
        isDisabled: true,
        isLoading: true,
        artist: searchValue,
      },
      async () => {
        const { artist } = this.state;
        const response = await searchAlbumsAPI(artist);

        this.setState({
          searchValue: '',
          isLoading: false,
          searchResponse: response,
        });
      },
    );
  };

  render() {
    const {
      buttonClicked,
      searchResponse,
      searchValue,
      isDisabled,
      isLoading,
      artist,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          searchValue={ searchValue }
          isDisabled={ isDisabled }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />

        {buttonClicked && (
          <SearchResult
            searchResponse={ searchResponse }
            artist={ artist }
            isLoading={ isLoading }
          />
        )}
      </div>
    );
  }
}
