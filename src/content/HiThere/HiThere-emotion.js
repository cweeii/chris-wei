import { css, keyframes } from 'emotion';

const triangleEffectTopLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-1rem, -1rem, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectTopRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(1rem, -1rem, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectBottomLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(-1rem, 1rem, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
`;

const triangleEffectBottomRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(1rem, 1rem, 0);
  }
  100% {
    opacity: 0;
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
  transition: color 300ms ease-in-out;

  @media (max-width: 43.75rem) {
    font-size: 2.5rem;
  }

  &:active,
  &:focus,
  &:hover {
    color: black;

    &::before {
      border-top: 1rem solid black;
    }

    &::after {
      border-top: 1rem solid black;
    }

    & span::before {
      border-bottom: 1rem solid black;
    }

    & span::after {
      border-bottom: 1rem solid black;
    }
  }

  &::before {
    animation: ${triangleEffectTopLeft} 1000ms infinite 1000ms;
    ${triangleDefaults};
    border-right: 1rem solid transparent;
    border-top: 1rem solid white;
    left: 0;
    opacity: 0;
    top: 0;
    transition: border-top 300ms ease-in-out;
  }

  &::after {
    animation: ${triangleEffectTopRight} 1000ms infinite 1000ms;
    ${triangleDefaults};
    border-left: 1rem solid transparent;
    border-top: 1rem solid white;
    opacity: 0;
    right: 0;
    top: 0;
    transition: border-top 300ms ease-in-out;
  }

  span::before {
    animation: ${triangleEffectBottomLeft} 1000ms infinite 1000ms;
    ${triangleDefaults};
    border-bottom: 1rem solid white;
    border-right: 1rem solid transparent;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: border-bottom 300ms ease-in-out;
  }

  span::after {
    animation: ${triangleEffectBottomRight} 1000ms infinite 1000ms;
    ${triangleDefaults};
    border-bottom: 1rem solid white;
    border-left: 1rem solid transparent;
    bottom: 0;
    opacity: 0;
    right: 0;
    transition: border-bottom 300ms ease-in-out;
  }
`;
