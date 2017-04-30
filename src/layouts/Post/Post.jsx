/* @flow */
import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'phenomic';
import PageLayout from '../Page';

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

const PostComponent = ({ head: post, body }: PageProps): React.Element<any> => (
  <PageLayout image={post.image ? post.image : undefined} title={post.title}>
    <PostDate>{new Date(post.date).toDateString()}</PostDate>
    <ContentWrapper className="markdown">
      <h1>{post.title}</h1>
      <BodyContainer>{body}</BodyContainer>
    </ContentWrapper>
  </PageLayout>
);

export default PostComponent;
