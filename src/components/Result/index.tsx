import React from 'react';
import styled from 'styled-components';

import { commonWrapper } from 'styles/mixins';

function Result() {
  return <Wrapper>Result</Wrapper>;
}

export default Result;

const Wrapper = styled.div`
  ${commonWrapper};
  right: 0;
  left: 50%;
`;
