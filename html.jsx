import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import { GoogleFont, TypographyStyle } from 'react-typography';
import PropTypes from 'prop-types';
import typography from './utils/typography';

const BUILD_TIME = new Date().getTime();

const App = ({ body }) => {
  const head = Helmet.rewind();

  let css;
  if (process.env.NODE_ENV === 'production') {
    /* eslint-disable
    react/no-danger,
    global-require,
    import/no-webpack-loader-syntax,
    import/no-unresolved
    */
    css = (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css'),
        }}
      />
    );
    /* eslint-enable
    react/no-danger,
    global-require,
    import/no-webpack-loader-syntax,
    import/no-unresolved
    */
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        {css}
      </head>
      <body className="landing-page">
        {/* eslint-disable react/no-danger */}
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: body }} />
        {/* eslint-enable react/no-danger */}
        <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
      </body>
    </html>
  );
};

App.propTypes = {
  body: PropTypes.string.isRequired,
};

export default App;
