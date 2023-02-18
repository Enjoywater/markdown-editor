import React from 'react';

import styled from 'styled-components';

import TextareaAutosize from 'react-textarea-autosize';

import { flex } from 'styles/flex';
import { font } from 'styles/font';
import { commonWrapper } from 'styles/mixins';

function Editor() {
  return (
    <Wrapper>
      <ToolBox>
        <Tool>
          H<span>1</span>
        </Tool>
        <Tool>
          H<span>2</span>
        </Tool>
        <Tool>
          H<span>3</span>
        </Tool>
        <Tool>
          H<span>4</span>
        </Tool>
        <Tool>
          <img src="/icons/bold.png" />
        </Tool>
        <Tool>
          <img src="/icons/italic.png" />
        </Tool>
        <Tool>
          <img src="/icons/linethrough.png" />
        </Tool>
      </ToolBox>
      <TextareaAutosize autoFocus placeholder="Write here.." />
    </Wrapper>
  );
}

export default Editor;

const Wrapper = styled.div`
  ${commonWrapper};
  left: 0;
  width: 50%;

  textarea {
    ${font(20, 300)};
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    resize: none;

    ::placeholder {
      opacity: 0.4;
    }
  }
`;

const ToolBox = styled.div`
  ${flex('', 'center')};
  position: sticky;
  top: 0;
  height: 36px;
  margin-bottom: 10px;
  background-color: white;
  border-bottom: 1px solid #dedede;
`;

const Tool = styled.div`
  ${flex('center', 'center')};
  ${font(20, 500, true)};
  width: 30px;
  height: 30px;
  margin-right: 6px;
  border-radius: 4px;
  cursor: pointer;

  span {
    font-size: 12px;
  }

  img {
    width: 16px;
    height: 16px;
  }

  :hover {
    background-color: #f3f3f3;
  }
`;
