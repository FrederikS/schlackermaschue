/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { joinUri } from 'phenomic';

type Props = PageProps & {
  config: Config,
};

const PageMeta = ({ head, config, __url }: Props): React.Element<any> => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const socialImage =
    head.hero && head.hero.match('://')
      ? head.hero
      : joinUri(process.env.PHENOMIC_USER_URL, head.hero);

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: 'og:image', content: socialImage },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${config.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'twitter:image', content: socialImage },
    { name: 'description', content: head.description },
  ];
  return <Helmet title={metaTitle} meta={meta} />;
};

export default PageMeta;
