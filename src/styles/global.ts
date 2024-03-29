import { css } from '@emotion/react';

function global() {
  return css`
    :root {
      --fontXLg: clamp(2rem, 4vw, 3.5rem);
      --fontLg: clamp(1.5rem, 3vw, 1.75rem);
      --fontMd: clamp(1rem, 2vw, 1.25rem);
      --fontSm: clamp(16px, 1vw, 1rem);
    }
    div,
    p,
    span,
    a,
    input,
    button {
      font-family: 'Pretendard Variable' !important;
      font-size: var(--fontSm);
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
