import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Album from './pages/musics/Album';
import Favorites from './pages/musics/Favorites';
import Login from './pages/login/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import Search from './pages/search/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <Switch>
          <Route
            exact
            path="/album/:id"
            component={ Album }
          />

          <Route
            exact
            path="/profile/edit"
            component={ ProfileEdit }
          />

          <Route
            exact
            path="/profile"
            component={ Profile }
          />

          <Route
            exact
            path="/search"
            component={ Search }
          />

          <Route
            exact
            path="/favorites"
            component={ Favorites }
          />

          <Route
            exact
            path="/"
            component={ Login }
          />

          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
