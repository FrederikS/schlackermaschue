/* @flow */
import React from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/sortBy';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import Helmet from 'react-helmet';
import access from 'safe-access';
import { config } from 'config';
import include from 'underscore.string/include';
import { rhythm } from '../utils/typography';
import Bio from '../components/Bio';

type Props = {
  route: Route,
};

const BlogIndex = ({ route }: Props): React.Element<any> => {
  const pageLinks = [];
  // Sort pages.
  const sortedPages = sortBy(route.pages, page =>
    access(page, 'data.date')
  ).reverse();
  sortedPages.forEach(page => {
    if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
      const title = access(page, 'data.title') || page.path;
      pageLinks.push(
        <li
          key={page.path}
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: 'none' }} to={prefixLink(page.path)}>
            {title}
          </Link>
        </li>
      );
    }
  });
  return (
    <div>
      <Helmet
        title={config.blogTitle}
        meta={[
          { name: 'description', content: 'Sample blog' },
          { name: 'keywords', content: 'blog, articles' },
        ]}
      />
      <Bio />
      <ul>
        {pageLinks}
      </ul>
    </div>
  );
};

export default BlogIndex;
