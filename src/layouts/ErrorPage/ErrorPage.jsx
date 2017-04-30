import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Page from '../Page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 1rem 0;
`;

const Oops = styled.div`
  font-size: 4rem;
  line-height: 4rem;
  color: #ddd;
`;

const Title = styled.p`
  margin: 4rem 0;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
`;

const PageError = ({ error, errorText }) => (
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
    }}
  >
    <Container>
      <Oops>{'😱 Oooops!'}</Oops>
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
  </Page>
);

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
};

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found',
};

export default PageError;
