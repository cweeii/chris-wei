import { css } from 'emotion';

export const hiButton = css`
  border-radius: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem 2rem;
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
`;

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
`;

export const description = css`
  align-self: flex-end;
`;

export const links = css`
  align-self: flex-end;
  display: flex;
`;
