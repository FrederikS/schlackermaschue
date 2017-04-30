/* @flow */
import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import MainLayout from './components/layout/Main';
import Page from './layouts/Page';
import ErrorPage from './layouts/ErrorPage';
import Home from './layouts/Home';
import Post from './layouts/Post';

const PageContainer = props => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      ErrorPage,
      Home,
      Post,
    }}
  />
);

export default (
  <Route component={MainLayout}>
    <Route path="*" component={PageContainer} />
  </Route>
);
