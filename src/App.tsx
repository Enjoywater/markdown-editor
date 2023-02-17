import React from 'react';
import styled from 'styled-components';

import Editor from 'components/Editor';
import Result from 'components/Result';

import { flex } from 'styles/flex';
import { font } from 'styles/font';

function App() {
  return (
    <Container>
      <Header>
        <p>Simple Markdown Editor</p>
      </Header>
      <Wrapper>
        <Editor />
        <Result />
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Header = styled.div`
  ${flex('center', 'center')};
  height: 60px;
  background-color: black;

  p {
    ${font(20, 600)};
    color: white;
  }
`;
