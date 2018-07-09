import { css, keyframes } from 'emotion';

export const svgLinks = css`
  align-self: flex-end;
  display: flex;
  margin-top: 2rem;
`;

const linkFlyIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-3rem, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const linkAnimation = delay => css`
  animation: ${linkFlyIn} 300ms ease-in-out ${delay} both;
  opacity: 0;

  & path {
    fill: white;
    transition: fill 300ms ease-in-out;
  }

  &:active,
  &:focus,
  &:hover {
    svg path {
      fill: black;
    }
  }

  &:not(:last-child) {
    margin: 0 1rem;
  }

  &:last-child {
    margin-left: 1rem;
  }
`;

export const githubLink = linkAnimation('2300ms');
export const facebookLink = linkAnimation('2100ms');
export const twitterLink = linkAnimation('1900ms');
export const linkedInLink = linkAnimation('1700ms');
export const resumeLink = linkAnimation('1500ms');
