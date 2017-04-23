/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Header from './header';
import Footer from './footer';
import PageTransition from './page/transition';

type Props = {
  children: React.Element<any>,
  page: ?Page,
  location: RouteLocation,
};

const Layout = ({ page, children, location }: Props): React.Element<any> => {
  const defaultMetaData = {
    title: config.blogTitle,
    description: config.blogDescription,
    keywords: 'blog',
  };
  const { title, description, keywords } = page ? page.data : defaultMetaData;
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
        ]}
      />
      <PageTransition location={location}>
        <Header withHomeLink={page ? page.path !== '/' : true} />
        <main role="main">
          {children}
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Layout;
