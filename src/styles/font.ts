import { css } from 'styled-components'

export const font = (size: number, weight: number, height = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${height}px;
`
