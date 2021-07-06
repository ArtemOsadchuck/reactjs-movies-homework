import React from 'react';
import Header from '../../components/Header/Header';
import Main from '../Main';
import MovieDetails from '../MovieDetails';
import ActorProfile from '../ActorProfile';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <MovieDetails />
      <ActorProfile />
    </div>
  );
}

export default App;
