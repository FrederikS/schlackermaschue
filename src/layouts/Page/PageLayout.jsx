/* @flow */
import React from 'react';
import Stage from '../../components/Stage';
import ContentContainer from '../../components/layout/Content';

type Props = PageProps & {
  children: React.Element<any>,
};

const PageLayout = ({ head, children }: Props): React.Element<any> => (
  <div>
    <Stage {...head} />
    <ContentContainer>
      {children}
    </ContentContainer>
  </div>
);

export default PageLayout;
