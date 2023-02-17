import { css } from 'styled-components';

export const font = (size: number, weight: number) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${size * 1.5}px;
`;
