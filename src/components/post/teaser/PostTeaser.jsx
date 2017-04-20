/* @flow */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { UndecoratedLink } from '../../link';

type Props = {
  url: string,
  post: Post,
};

const PostFooter = styled.footer`
    color: #b3b3b1;
    font-size: 0.8em;
`;

const Section = styled.section`
    margin: 0.5em 0 0.5em 0;
`;

const PostTeaser = ({ url, post }: Props): React.Element<any> => {
  const date = moment(post.date).format('LL');
  return (
    <article itemScope itemType="http://schema.org/BlogPosting" role="article">
      <header>
        <h2 itemProp="name">
          <UndecoratedLink to={url} itemProp="url">
            {post.title}
          </UndecoratedLink>
        </h2>
      </header>
      <Section itemProp="description">
        <p>{post.description}</p>
      </Section>
      <PostFooter>
        <time dateTime={date}>{date}</time>
      </PostFooter>
    </article>
  );
};

export default PostTeaser;
