import { css } from 'styled-components';

export const font = (size: number, weight: number, isSerif = false) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${size * 1.5}px;

  ${isSerif &&
  css`
    font-family: 'Noto Serif', serif;
  `}
`;
