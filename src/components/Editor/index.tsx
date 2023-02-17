import React from 'react';

import styled from 'styled-components';
import { flex } from 'styles/flex';

import { commonWrapper } from 'styles/mixins';

function Editor() {
  return (
    <Wrapper>
      <ToolBox>H1, H2, H3, H4, Bbold, Italic, Line-through</ToolBox>
    </Wrapper>
  );
}

export default Editor;

const Wrapper = styled.div`
  ${commonWrapper};
  left: 0;
  width: 50%;
`;

const ToolBox = styled.div`
  ${flex('', 'center')};
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 1px solid blue;
`;
