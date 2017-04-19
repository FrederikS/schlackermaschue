/* @flow */
import React from 'react';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import Layout from '../src/components/layout/';

type Props = {
  children: React.Element<any>,
  route: Route,
  location: RouteLocation,
};

const Template = ({ children, route, location }: Props): React.Element<any> => {
  const currentPage = route.pages.find(
    page => page.path === prefixLink(location.pathname)
  );
  const { title, description, keywords } = currentPage ? currentPage.data : {};
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
};

export default Template;
