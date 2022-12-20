import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';

import Form from '../components/Form';
import Loading from '../components/Loading';

export default class Login extends Component {
  state = {
    isDisabled: true,
    userName: '',
    isLoading: false,
  };

  inputValidation = (value) => {
    const minLength = 3;
    if (value.length >= minLength) {
      this.setState({ isDisabled: false });
    }
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState(
      {
        userName: value,
        isDisabled: true,
      },
      () => this.inputValidation(value),
    );
  };

  handleClick = async () => {
    const { userName } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true }, async () => {
      await createUser({ name: userName });
      this.setState({ isLoading: false });
      history.push('/search');
    });
  };

  render() {
    const { isDisabled, userName, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div data-testid="page-login">
            <p>Login</p>
            <Form
              isDisabled={ isDisabled }
              userName={ userName }
              handleChange={ this.handleChange }
              handleClick={ this.handleClick }
            />
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
