/* @flow */
import React from 'react';
import styled from 'styled-components';

const BackgroundImageWrapper = styled.div`
  position: relative;
  height: 60vh;
  overflow: hidden;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const BackgroundImage = styled.div`
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    ),
    url(${props => props.image});
  transform: ${props => `translate3d(0px, ${props.scrollY / 5}px, 0px)`};
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

type Props = {
  image: string,
  children: React.Element<any>,
};

type State = {
  scrollY: number,
};

class StageBackgroundImage extends React.Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (): void => {
    this.setState({
      scrollY: window.scrollY,
    });
  };

  render() {
    return (
      <BackgroundImageWrapper>
        <BackgroundImage image={this.props.image} scrollY={this.state.scrollY}>
          {this.props.children}
        </BackgroundImage>
      </BackgroundImageWrapper>
    );
  }
}

export default StageBackgroundImage;
