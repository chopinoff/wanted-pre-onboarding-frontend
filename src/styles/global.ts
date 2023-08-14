import { css } from '@emotion/react';

function global() {
  return css`
    * {
      font-family: 'SUIT' !important;
      font-size: 18px !important;
      font-weight: 400 !important;
      color: var(--text);
    }
    html {
      background-color: var(--bg);
    }
    body {
      background-color: var(--bg) !important;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
  `;
}

export default global;
