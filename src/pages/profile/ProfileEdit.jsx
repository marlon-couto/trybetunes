import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUser, updateUser } from '../../services/userAPI';

import Header from '../../components/layout/Header';
import Loading from '../../components/layout/Loading';
import ProfileEditForm from './ProfileEditForm';

export default class ProfileEdit extends Component {
  state = {
    isLoading: false,
    name: '',
    description: '',
    email: '',
    image: '',
    isDisabled: true,
  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    this.setState({ isLoading: true }, async () => {
      const response = await getUser();
      const { description, email, name, image } = response;

      this.setState({
        isLoading: false,
        name,
        description,
        email,
        image,
      });
    });
  };

  inputValidation = () => {
    const { name, description, email, image } = this.state;

    const errorCases = [
      !name.length,
      !description.length,
      !email.length,
      !image.length,
    ];

    const filledForm = errorCases.every((error) => error !== true);

    this.setState({ isDisabled: !filledForm });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.inputValidation());
  };

  handleClick = async () => {
    const { name, description, email, image } = this.state;
    const { history } = this.props;

    this.setState({ isLoading: true }, async () => {
      await updateUser({
        name,
        description,
        email,
        image,
      });

      this.setState({ isLoading: false });

      history.push('/profile');
    });
  };

  render() {
    const { isLoading, name, description, email, image, isDisabled } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />

        {isLoading ? (
          <Loading />
        ) : (
          <ProfileEditForm
            name={ name }
            description={ description }
            email={ email }
            image={ image }
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
            isDisabled={ isDisabled }
          />
        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
