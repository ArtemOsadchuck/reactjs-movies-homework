import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from '../../components/Header/Header';
import Main from '../Main';
import MovieDetails from '../MovieDetails';
import ActorProfile from '../ActorProfile';
import ErrorBoundary from '../../components/ErrorBoundary';

function App() {
  const homePath = '/' || '/popular' || '/top_rated' || 'upcoming';
  return (
    <div className="wrapper">
      <ErrorBoundary title="header component">
        <Header />
      </ErrorBoundary>

      <Switch>
        <Route exact path={homePath}>
          <ErrorBoundary title="main page">
            <Main />
          </ErrorBoundary>
        </Route>

        <Route path="/movie-details">
          <ErrorBoundary title="movie details page">
            <MovieDetails />
          </ErrorBoundary>
        </Route>

        <Route path="/actor-profile">
          <ErrorBoundary title="actor profile page">
            <ActorProfile />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
