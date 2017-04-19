/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';

type Props = {
  to: string,
};

// TODO replace usages

const WrappedLink = (props: Props): React.Element<any> => {
  const wrappedProps = Object.assign({}, props, { to: prefixLink(props.to) });
  return (
    <Link {...wrappedProps}>
      {wrappedProps.children}
    </Link>
  );
};

export default WrappedLink;
