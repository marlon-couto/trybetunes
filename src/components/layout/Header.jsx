import React, { Component } from 'react';
import { getUser } from '../../services/userAPI';

import Loading from './Loading';
import Navbar from './Navbar';

export default class Header extends Component {
  state = {
    loggedUser: '',
    isLoading: true,
  };

  async componentDidMount() {
    const userFound = await getUser();

    this.setState({
      loggedUser: userFound,
      isLoading: false,
    });
  }

  render() {
    const {
      loggedUser: { name },
      isLoading,
    } = this.state;

    return (
      <header data-testid="header-component">
        <Navbar />
        {isLoading ? <Loading /> : <p data-testid="header-user-name">{name}</p>}
      </header>
    );
  }
}
