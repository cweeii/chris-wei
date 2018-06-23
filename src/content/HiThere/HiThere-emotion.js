import { css, keyframes } from 'emotion';

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

export const hiLink = css`
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem 2rem;
  position: absolute;
`;

export const hiSpan = css`
  & svg {
    animation: ${arrowMovement} 1s infinite;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
  }
`;
