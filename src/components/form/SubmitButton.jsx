import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubmitButton extends Component {
  render() {
    const { text, dataTestId, isDisabled, handleClick } = this.props;

    return (
      <div>
        <button
          type="button"
          id="submitButton"
          name="submitButton"
          disabled={ isDisabled }
          onClick={ handleClick }
          data-testid={ dataTestId }
        >
          { text }
        </button>
      </div>
    );
  }
}

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
