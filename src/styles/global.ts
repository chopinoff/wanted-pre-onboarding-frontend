import { css } from '@emotion/react';

function global() {
  return css`
    * {
      font-family: 'SUIT' !important;
      font-size: 24px !important;
      font-weight: 400 !important;
    }

    h2 {
      font-weight: 600;
    }
  `;
}

export default global;
