import { css, keyframes } from 'emotion';

const appearAnimation = keyframes`
  0% {
    opacity: 0.01;
    transform: translate3d(0, 4rem,0 );
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const exitAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0.01;
    transform: translate3d(0, -4rem, 0);
  }
`;

const cubicBezier = animation => css`
  animation: ${animation} 1000ms cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

export const layout = css`
  align-items: center;
  background: linear-gradient(
    to bottom right,
    rgb(95, 75, 139, 1),
    rgb(95, 75, 139, 0.5)
  );
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

export const appear = css`
  opacity: 0.01;
  transform: translate3d(0, 4rem, 0);
`;

export const appearActive = css`
  ${cubicBezier(appearAnimation)};
`;

export const enter = css`
  opacity: 0;
  transform: translateY(2rem);
`;

export const enterActive = css`
  ${cubicBezier(appearAnimation)};
`;

export const exit = css`
  opacity: 1;
  transform: translate3d(0, 0, 0);
`;

export const exitActive = css`
  ${cubicBezier(exitAnimation)};
`;
