import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';

import { commonWrapper } from 'styles/mixins';

function Result({ text }: { text: string }) {
  return (
    <Wrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </Wrapper>
  );
}

export default Result;

const Wrapper = styled.div`
  ${commonWrapper};
  right: 0;
  left: 50%;
  padding-top: 50px;
  background-color: #fafafa;
`;
