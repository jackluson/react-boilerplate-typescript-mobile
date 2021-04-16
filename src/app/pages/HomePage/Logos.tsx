import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as CRALogo } from './assets/cra-logo.svg';
import { ReactComponent as RPLogo } from './assets/rp-logo.svg';
import { ReactComponent as PlusSign } from './assets/plus-sign.svg';

export function Logos() {
  return (
    <Wrapper>
      <CRALogo className="logo" />
      <PlusSign className="sign" />
      <RPLogo className="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.border};

  .logo {
    width: 96px;
    height: 96px;
  }

  .sign {
    width: 32px;
    height: 32px;
    margin: 0 32px;
  }
`;
