import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NameInput from './NameInput';
import SubmitButton from './SubmitButton';

export default class Form extends Component {
  render() {
    const { isDisabled, userName, handleChange, handleClick } = this.props;

    return (
      <form>
        <NameInput
          userName={ userName }
          handleChange={ handleChange }
        />

        <SubmitButton
          isDisabled={ isDisabled }
          handleClick={ handleClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
