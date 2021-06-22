import React from 'react';
import Header from '../../components/Header/Header';
// import Main from '../Main';
// import ActorProfile from '../ActorProfile';
import MovieDetails from '../MovieDetails';
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <Main /> */}
      {/* <ActorProfile /> */}
      <MovieDetails />
    </div>
  );
}

export default App;
