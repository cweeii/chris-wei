import { css, keyframes } from 'emotion';

const slideUp = keyframes`
  0% {
    translateY(-2rem);
  }
  100% {
    translateY(0);
  }
`;

export const hiLink = css`
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem 2rem;
  opacity: 0;
  transform: translateY(2rem);
  transition: all 1.5s ease-in-out;

  &.mounted {
    transform: translateY(0);
    opacity: 1;
  }
`;
