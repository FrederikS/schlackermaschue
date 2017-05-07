/* @flow */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { GoogleFont, TypographyStyle } from 'react-typography';
import typography from '../../../../utils/typography';

const DefaultHeadMeta = (props: any, { metadata: { pkg } }: Context) => (
  <div hidden>
    <Helmet
      meta={[
        { property: 'og:site_name', content: pkg.name },
        { name: 'twitter:site', content: `@${pkg.twitter}` },
      ]}
      script={[
        {
          src: 'https://cdn.polyfill.io/v2/polyfill.min.js' +
            '?features=es6&flags=gated',
        },
      ]}
    />

    {/* meta viewport safari/chrome/edge */}
    <Helmet
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ]}
    />
    <style>{'@-ms-viewport { width: device-width; }'}</style>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
  </div>
);

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
};

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default DefaultHeadMeta;
