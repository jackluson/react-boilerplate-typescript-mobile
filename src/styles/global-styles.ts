import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
    font-size: 18px;
    &.fontLoaded {
      font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 18px;
    }
  }

  /* body */

  p,
  label {
    line-height: 1.5em;
    font-size: 14px;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 48px;
    height: 48px;
  }
`;
