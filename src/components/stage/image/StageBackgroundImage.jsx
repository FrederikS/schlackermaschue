/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Track, TrackDocument } from 'react-track';
import { tween } from 'react-imation';
import { bottomTop, calculateScrollY } from 'react-track/tracking-formulas';
import { translate3d } from 'react-imation/tween-value-factories';

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
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const StageBackgroundImage = ({ image, children }: Props) => (
  <BackgroundImageWrapper>
    <TrackDocument formulas={[calculateScrollY, bottomTop]}>
      {(scrollY, bottomTopOuter) => (
        <Track component={BackgroundImage} formulas={[bottomTopOuter]}>
          {(BackgroundImageTracked, posBottomTop) => (
            <BackgroundImageTracked
              image={image}
              style={tween(scrollY, [
                [0, { transform: translate3d(0, 0, 0) }],
                [posBottomTop, { transform: translate3d(0, 100, 0) }],
              ])}
            >
              {children}
            </BackgroundImageTracked>
          )}
        </Track>
      )}
    </TrackDocument>
  </BackgroundImageWrapper>
);

export default StageBackgroundImage;
