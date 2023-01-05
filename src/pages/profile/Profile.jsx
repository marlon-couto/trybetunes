import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';

import Header from '../../components/layout/Header';
import Loading from '../../components/layout/Loading';
import ProfileInfo from './ProfileInfo';

export default class Profile extends Component {
  state = {
    isLoading: false,
    userInfo: {},
  };

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = () => {
    this.setState({ isLoading: true }, async () => {
      const response = await getUser();

      this.setState({
        isLoading: false,
        userInfo: response,
      });
    });
  };

  render() {
    const {
      isLoading,
      userInfo: { name, description, email, image },
    } = this.state;

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
