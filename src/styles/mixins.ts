import { css } from 'styled-components';

export const fitImg = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const commonWrapper = css`
  position: fixed;
  top: 60px;
  bottom: 0;
  padding: 20px;
  padding-top: 0;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;
