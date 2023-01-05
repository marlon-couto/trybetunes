import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';

import Header from '../../components/layout/Header';
import Loading from '../../components/layout/Loading';
import ProfileInfo from './ProfileInfo';

export default class Profile extends Component {
  state = {
    isLoading: false,
    name: '',
    description: '',
    image: '',
    email: '',
  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    this.setState({ isLoading: true }, async () => {
      const response = await getUser();

      this.setState({
        isLoading: false,
        name: response.name,
        email: response.email,
        description: response.description,
        image: response.image,
      });
    });
  };

  render() {
    const { isLoading, name, description, email, image } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />

        {isLoading ? (
          <Loading />
        ) : (
          <ProfileInfo
            name={ name }
            description={ description }
            email={ email }
            image={ image }
          />
        )}
      </div>
    );
  }
}
