import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Header from '../../components/Header/Header';
import Main from '../Main';
import MovieDetails from '../MovieDetails';
import ActorProfile from '../ActorProfile';
import ErrorBoundary from '../../components/ErrorBoundary';
import PageNotFound404 from '../../components/PageNotFound404';
import { timingOfPageNotFound } from '../../constants/variables';

function App() {
  // const homePath = '/' || '/popular' || '/top_rated' || 'upcoming';

  return (
    <div className="wrapper">
      <ErrorBoundary title="header component">
        <Header />
      </ErrorBoundary>

      <Switch>
        <Route exact path={'/'}>
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
        <Route>
          <ErrorBoundary title="error 404">
            <PageNotFound404 timing={timingOfPageNotFound} />
          </ErrorBoundary>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
