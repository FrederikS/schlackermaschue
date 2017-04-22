/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import { config } from 'config';
import Header from './header';
import Footer from './footer';
import '../../../css/transitions.css';

type Props = {
  children: React.Element<any>,
  page: ?Page,
  location: RouteLocation,
};

type State = {
  scrollY: number,
};

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-top: ${props => `${props.scrollY}px`}
`;

class Layout extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
  };
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    this.context.router.listen((nextLocation: RouteLocation) => {
      const { location } = this.props;
      if (location.pathname !== nextLocation.pathname) {
        this.setState({ scrollY: window.scrollY }, () => {
          setTimeout(() => {
            this.setState({ scrollY: 0 }, () => {
              window.scrollTo(0, 0);
            });
          }, 500);
        });
      }
    });
  }

  render() {
    const defaultMetaData = {
      title: config.blogTitle,
      description: config.blogDescription,
      keywords: 'blog',
    };
    const { page, children, location } = this.props;
    const { title, description, keywords } = page ? page.data : defaultMetaData;
    return (
      <div>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        />
        <CSSTransitionGroup
          transitionName="move"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <ContentWrapper key={location.pathname} scrollY={this.state.scrollY}>
            <Header withHomeLink={page ? page.path !== '/' : true} />
            <main role="main">
              {children}
            </main>
            <Footer />
          </ContentWrapper>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Layout;
