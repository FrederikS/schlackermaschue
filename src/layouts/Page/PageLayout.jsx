/* @flow */
import React, { PropTypes } from 'react';
import Stage from '../../components/Stage';
import ContentContainer from '../../components/layout/Content';
import LoadingIndicator from '../../components/Loading';
import PageMeta from '../../components/layout/page/Meta';

type Props = PageProps & {
  children: React.Element<any>,
};

type Context = {
  metadata: Metadata,
};

const PageLayout = (
  props: Props,
  { metadata: { pkg } }: Context
): React.Element<any> => {
  const { head, children, isLoading } = props;
  return isLoading
    ? <LoadingIndicator />
    : <div>
        <PageMeta {...props} config={pkg} />
        <Stage {...head} />
        <ContentContainer>
          {children}
        </ContentContainer>
      </div>;
};

PageLayout.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default PageLayout;
