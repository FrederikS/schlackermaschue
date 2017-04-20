/* @flow */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PageLayout from '../layout/page';

type Props = {
  post: Post,
};

const ContentWrapper = styled.div`
    margin: 1em 0;
`;

const PostComponent = ({ post }: Props): React.Element<any> => (
  <PageLayout image={post.image} title={post.title}>
    <ContentWrapper className="markdown">
      <h1>{post.title}</h1>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      {/* eslint-enable react/no-danger */}
      <em>
        Posted {moment(post.date).format('LL')}
      </em>
    </ContentWrapper>
  </PageLayout>
);

export default PostComponent;
