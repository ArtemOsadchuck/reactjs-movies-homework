import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../Main';
import MovieDetails from '../MovieDetails';
import ActorProfile from '../ActorProfile';
import './App.scss';
import ErrorBoundary from '../../components/ErrorBoundary';

function App() {
  return (
    <div className="wrapper">
      <ErrorBoundary title="header component">
        <Header />
      </ErrorBoundary>

      <ErrorBoundary title="main page">
        <Main />
      </ErrorBoundary>

      <ErrorBoundary title="movie details page">
        <MovieDetails />
      </ErrorBoundary>

      <ErrorBoundary title="actor profile page">
        <ActorProfile />
      </ErrorBoundary>
    </div>
  );
}

export default App;
