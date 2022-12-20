import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';

export default class Search extends Component {
  state = {
    isDisabled: true,
    searchValue: '',
    searchResponse: [],
    isLoading: false,
    artist: '',
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

  handleClick = () => {
    const { searchValue } = this.state;

    this.setState(
      {
        isDisabled: true,
        isLoading: true,
        artist: searchValue,
      },
      async () => {
        const response = await searchAlbumsAPI(searchValue);
        this.setState({
          searchValue: '',
          isLoading: false,
          searchResponse: response,
        });
      },
    );
  };

  render() {
    const { searchResponse, searchValue, isDisabled, isLoading, artist } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <SearchForm
          searchValue={ searchValue }
          isDisabled={ isDisabled }
          handleChange={ this.handleChange }
          handleClick={ this.handleClick }
        />

        <SearchResult
          searchResponse={ searchResponse }
          artist={ artist }
          isLoading={ isLoading }
        />
      </div>
    );
  }
}
