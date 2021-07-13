import React from 'react';

import Header from '../../components/Header/Header';
import Main from '../Main';
import MovieDetails from '../MovieDetails';
import ActorProfile from '../ActorProfile';
import ErrorBoundary from '../../components/ErrorBoundary';

import './App.scss';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <ErrorBoundary title="header component">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary title="main page">
        <Route exact path="/">
          <Main />
        </Route>
      </ErrorBoundary>

      <ErrorBoundary title="movie details page">
        <Route path="/movie-details/">
          <MovieDetails />
        </Route>
      </ErrorBoundary>

      <ErrorBoundary title="actor profile page">
        <Route path="/actor-profile">
          <ActorProfile />
        </Route>
      </ErrorBoundary>
    </div>
  );
}

export default App;
