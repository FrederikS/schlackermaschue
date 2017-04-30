/* @flow */
import React from 'react';
import styled from 'styled-components';
import PageLayout from '../Page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 1rem 0;
`;

const Title = styled.p`
  margin: 4rem 0;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
`;

type Props = {
  error: number,
  errorText: string,
};

const PageError = ({ error, errorText }: Props): React.Element<any> => (
  <PageLayout
    head={{
      title: '😱 Oooops!',
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
    }}
  >
    <Container>
      <Title>
        <strong>{error}</strong>
        {' '}
        {errorText}
      </Title>
      {error === 404 &&
        <div>
          {'It seems you found a broken link. '}
          {'Sorry about that. '}
          <br />
          {'Do not hesitate to report this page 😁.'}
        </div>}
    </Container>
  </PageLayout>
);

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found',
};

export default PageError;
