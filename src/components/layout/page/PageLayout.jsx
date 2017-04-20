/* @flow */
import React from 'react';
import Stage from '../../stage';
import ContentContainer from '../content';

type Props = {
  image: string,
  title: string,
  description?: string,
  children: React.Element<any>,
};

const PageLayout = (props: Props): React.Element<any> => {
  const { children, ...stageProps } = props;
  return (
    <div>
      <Stage {...stageProps} />
      <ContentContainer>
        {children}
      </ContentContainer>
    </div>
  );
};

export default PageLayout;
