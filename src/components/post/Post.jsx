/* @flow */
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { prefixLink } from 'gatsby/dist/isomorphic/gatsby-helpers';
import PageLayout from '../layout/page';

type Props = {
  post: Post,
};

const ContentWrapper = styled.div`
    margin: 0.7em 1.3em;
    & a {
        color: inherit;
    }
`;

const PostDate = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8em;
`;

const PostComponent = ({ post }: Props): React.Element<any> => (
  <PageLayout
    image={post.image ? prefixLink(post.image) : undefined}
    title={post.title}
  >
    <PostDate>{moment(post.date).format('LL')}</PostDate>
    <ContentWrapper className="markdown">
      <h1>{post.title}</h1>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
      {/* eslint-enable react/no-danger */}
    </ContentWrapper>
  </PageLayout>
);

export default PostComponent;
