/* @flow */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Stage from '../../components/Stage';
import LoadingIndicator from '../../components/Loading';
import PageMeta from '../../components/layout/page/Meta';
import PageTransition from '../../components/layout/page/Transition';

type Props = PageProps & {
  children: React.Element<any>,
};

type Context = {
  metadata: Metadata,
};

const ContentContainer = styled.div`
  padding: 1em;
  max-width: 35em;
  margin: auto;
`;

const PageLayout = (props: Props, { metadata: { pkg } }: Context): React.Element<any> => {
  const { head, children } = props;
  return (
    <div>
      <PageMeta {...props} config={pkg} />
      <Stage {...head} />
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  );
};

PageLayout.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

const PageLayoutWithTransition = (props: Props): React.Element<any> => {
  const { isLoading, __url, ...layoutProps } = props;
  return (
    <PageTransition path={__url}>
      {isLoading ? <LoadingIndicator /> : <PageLayout {...layoutProps} />}
    </PageTransition>
  );
};

export default PageLayoutWithTransition;
