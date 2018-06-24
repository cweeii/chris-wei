import { css, keyframes } from 'emotion';
import { RSA_PKCS1_PSS_PADDING } from 'constants';

const arrowMovement = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(2rem, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectTopLeft = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-2rem, -2rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectTopRight = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(2rem, -2rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectBottomLeft = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-2rem, 2rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectBottomRight = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(2rem, 2rem, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleDefaults = css`
  content: '';
  height: 0;
  position: absolute;
  width: 0;
`;

export const hiLink = css`
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem 2rem;
  position: absolute;

  &:before {
    animation: ${triangleEffectTopLeft} infinite 1s;
    ${triangleDefaults};
    border-right: 1rem solid transparent;
    border-top: 1rem solid white;
    left: 0;
    top: 0;
  }

  &:after {
    animation: ${triangleEffectTopRight} infinite 1s;
    ${triangleDefaults};
    border-left: 1rem solid transparent;
    border-top: 1rem solid white;
    right: 0;
    top: 0;
  }

  span:before {
    animation: ${triangleEffectBottomLeft} infinite 1s;
    ${triangleDefaults};
    border-bottom: 1rem solid white;
    border-right: 1rem solid transparent;
    bottom: 0;
    left: 0;
  }

  span:after {
    animation: ${triangleEffectBottomRight} infinite 1s;
    ${triangleDefaults};
    border-bottom: 1rem solid white;
    border-left: 1rem solid transparent;
    bottom: 0;
    right: 0;
  }
`;

export const hiSpan = css`
  & svg {
    animation: ${arrowMovement} 1s infinite;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
  }
`;
