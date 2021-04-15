import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  :root {
    --scale-coefficient: 1;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT}px;
    background-color: ${p => p.theme.background};
    font-size: 18px;
    &.fontLoaded {
      font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 18px;
    }
  }

  @media screen and (min-width: 750px) and (max-width: 1125px) {
    :root {
      --scale-coefficient: 0.75;
    }
  }
  @media screen and (min-width: 1125px) and (max-width: 1500px) {
    :root {
      --scale-coefficient: 0.5
    }
  }
  @media screen and (min-width: 1500px) {
    :root {
      --scale-coefficient: 0.35
    }
  }
  @media screen and (min-width: 750px) {
    body {
      transform: scale(var(--scale-coefficient));
      transform-origin: top;
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
