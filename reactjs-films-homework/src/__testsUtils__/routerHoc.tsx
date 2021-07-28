import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

interface IRouterWrapper {
  children: React.ReactNode;
  url: string;
}

const RouterWrapper: React.FC<IRouterWrapper> = ({ children, url }) => {
  const history = createMemoryHistory();
  history.push(url);
  return <Router history={history}>{children}</Router>;
};

export default RouterWrapper;
