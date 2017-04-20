import React from 'react';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import styled from 'styled-components';
import { config } from 'config';

const FooterWrapper = styled.footer`
    text-align: center;
    font-size: 12px;
    color: #999;
    padding: 15px 0;
`;

const LinkList = styled.ul`
    list-style-type: none;
    margin: 0 0 -0.5em 0;
`;

const ContactLink = styled.a`
    text-decoration: none;
    color: #666;
`;

const MetaSection = styled.section`
    line-height: 1em;
    margin-bottom: 0.5em;
`;

const Footer = (): React.Element<any> => (
  <FooterWrapper>
    <LinkList>
      <li>
        <a href={config.twitter}><TwitterIcon size={40} color="black" /></a>
      </li>
    </LinkList>
    <MetaSection>
      All content copyright
      {' '}
      <ContactLink href={`mailto:${config.email}`}>
        {config.authorName}
      </ContactLink>
      {' '}
      © 2017 • All rights reserved.
    </MetaSection>
    <MetaSection>
      Made with <a href="https://github.com/gatsbyjs/gatsby"> Gatsby</a>
    </MetaSection>
  </FooterWrapper>
);

export default Footer;
