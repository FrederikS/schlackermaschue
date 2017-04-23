/* @flow */
import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled from 'styled-components';
import './transition.css';

type Props = {
  children: React.Element<any>,
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

class PageTransition extends React.Component {
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
    const { location, children } = this.props;
    return (
      <CSSTransitionGroup
        transitionName="move"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <ContentWrapper key={location.pathname} scrollY={this.state.scrollY}>
          {children}
        </ContentWrapper>
      </CSSTransitionGroup>
    );
  }
}

export default PageTransition;
