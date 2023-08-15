import { css } from '@emotion/react';

function global() {
  return css`
    :root {
      --fontXLg: clamp(2rem, 4vw, 3.5rem);
      --fontLg: clamp(1.5rem, 3vw, 2.5rem);
      --fontMd: clamp(1rem, 2vw, 1.2rem);
      --fontSm: clamp(14px, 1vw, 1rem);
    }
    div,
    p,
    span,
    a,
    input,
    button {
      font-family: 'SUIT';
      font-size: var(--fontMd);
      word-spacing: -0.1em;
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
