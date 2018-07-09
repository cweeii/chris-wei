import { css, keyframes } from 'emotion';

export const container = css`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const name = css`
  font-size: 5rem;
  font-weight: bold;
  transition: font-size 300ms linear;

  @media (max-width: 43.75rem) {
    font-size: 3rem;
  }
`;

export const description = css`
  align-self: flex-end;
`;
