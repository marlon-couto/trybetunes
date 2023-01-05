import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/form/Input';
import SubmitButton from '../../components/form/SubmitButton';

export default class SearchForm extends Component {
  render() {
    const { searchValue, isDisabled, handleChange, handleClick } = this.props;

    return (
      <form>
        <Input
          value={ searchValue }
          handleChange={ handleChange }
          type="search"
          name="searchArtist"
          dataTestId="search-artist-input"
        />

        <SubmitButton
          isDisabled={ isDisabled }
          handleClick={ handleClick }
          dataTestId="search-artist-button"
          text="Pesquisar"
        />
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
