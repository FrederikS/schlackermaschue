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

const PostComponent = (props: PageProps): React.Element<any> => {
  const { head: post, body } = props;
  return (
    <PageLayout {...props}>
      <PostDate>{new Date(post.date).toDateString()}</PostDate>
      <ContentWrapper className="markdown">
        <h1>{post.title}</h1>
        {!props.isLoading && <BodyContainer>{body}</BodyContainer>}
      </ContentWrapper>
    </PageLayout>
  );
};

export default PostComponent;
