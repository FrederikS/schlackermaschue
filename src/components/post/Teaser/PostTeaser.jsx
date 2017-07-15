/* @flow */
import React from 'react';
import styled from 'styled-components';
import { UndecoratedLink } from '../../Link';

const PostFooter = styled.footer`
  color: #b3b3b1;
  font-size: 0.8em;
`;

const Section = styled.section`margin: 0.5em 0;`;

type Props = {
  post: Post,
};

const PostTeaser = ({ post }: Props): React.Element<any> => {
  const date = new Date(post.date).toLocaleDateString('de');
  return (
    <article itemScope itemType="http://schema.org/BlogPosting">
      <header>
        <h2 itemProp="name">
          {/* eslint-disable no-underscore-dangle */}
          <UndecoratedLink to={post.__url} itemProp="url">
            {post.title}
          </UndecoratedLink>
          {/* eslint-enable no-underscore-dangle */}
        </h2>
      </header>
      <Section itemProp="description">
        <p>
          {post.description}
        </p>
      </Section>
      <PostFooter>
        <time dateTime={date}>
          {date}
        </time>
      </PostFooter>
    </article>
  );
};

export default PostTeaser;
