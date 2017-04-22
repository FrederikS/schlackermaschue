/* @flow */
import React from 'react';
import styled from 'styled-components';

const BackgroundImageWrapper = styled.div`
  position: relative;
  height: 60vh;
  overflow: hidden;
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: #000;
`;

const BackgroundImage = styled.div`
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.2)
    ),
    url(${props => props.image});
  transform: ${props => `translate3d(0px, ${props.scrollY / 3}px, 0px)`};
  opacity: ${props => 1 - props.scrollY / 700};
  position: absolute;
  background-size: cover;
  background-position: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
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
