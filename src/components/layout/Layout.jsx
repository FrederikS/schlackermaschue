/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.Element<any>,
  title?: string,
  description?: string,
  keywords?: string,
};

const Layout = ({
  children,
  title,
  description,
  keywords,
}: Props): React.Element<any> => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
      ]}
    />
    <Header />
    <main role="main">
      {children}
    </main>
    <Footer />
  </div>
);

Layout.defaultProps = {
  title: config.blogTitle,
  description: config.blogDescription,
  keywords: 'blog, articles',
};

export default Layout;
