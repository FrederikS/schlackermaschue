import React from 'react';
import { Container } from 'react-responsive-grid';
import typography from '../../../utils/typography';

type Props = {
  children: React.Element<any>,
};

const { rhythm } = typography;

const ContentContainer = ({ children }: Props): React.Element<any> => (
  <Container
    style={{
      maxWidth: rhythm(24),
      padding: `${rhythm(0.4)} ${rhythm(3 / 4)}`,
    }}
  >
    {children}
  </Container>
);

export default ContentContainer;
