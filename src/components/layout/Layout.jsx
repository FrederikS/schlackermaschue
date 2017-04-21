/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { browserHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Header from './header';
import Footer from './footer';
import '../../../css/transition.css';

type Props = {
  children: React.Element<any>,
  page: ?Page,
  location: RouteLocation,
};

type State = {
  currentLocation: RouteLocation,
  routeChanged: boolean,
};

class Layout extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      currentLocation: props.location,
      routeChanged: false,
    };
  }

  componentDidMount() {
    browserHistory.listen((location: RouteLocation) => {
      if (location.pathname !== this.state.currentLocation.pathname) {
        this.setState(
          {
            currentLocation: location,
            routeChanged: true,
          },
          () => {
            setTimeout(() => {
              this.setState({
                routeChanged: false,
              });
            }, 150);
          }
        );
      }
    });
  }

  render() {
    const defaultMetaData = {
      title: config.blogTitle,
      description: config.blogDescription,
      keywords: 'blog',
    };
    const { children, page } = this.props;
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
        <Header withHomeLink={page ? page.path !== '/' : true} />
        <main role="main">
          <CSSTransitionGroup
            transitionName="move"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {this.state.routeChanged
              ? null
              : <div key={this.state.currentLocation}>
                  {children}
                </div>}
          </CSSTransitionGroup>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
