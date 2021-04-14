import * as React from 'react';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper>
      <Title>react-boilerplate-typescript-mobile</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 260px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 12px;
`;
