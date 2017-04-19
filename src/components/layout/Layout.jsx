/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import Header from './header';
import Footer from './footer';

type Props = {
  children: React.Element<any>,
  page: ?Page,
};

const Layout = ({ children, page }: Props): React.Element<any> => {
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
      <Header withHomeLink={page ? page.path !== '/' : true} />
      <main role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
