import { css } from '@emotion/react';

function theme() {
  return css`
    :root {
      --main: #03c184;
      --mainOp: #03c184bc;
      --mainOp2: #03c18430;
      --text: #090a0d;
      --text2: #121319;
      --text3: #1b1d25;
      --textOp: #090a0d30;
      --bd: #bcc0cf;
      --bd2: #d8dbe7;
      --bg: #f5f7ff;
      --bg2: #eeeff5;
      --bg3: #d0d2dc;
      --bgOp: #d8dbe7ee;
      --bgOp2: #d8dbe7bb;
      --alert: #ff1e1e;
      --hover: contrast(30%);
      --shadow: #d0d2dc50;
    }
    [data-theme='dark'] {
      --main: #03c184;
      --mainOp: #03c184bc;
      --mainOp2: #03c18430;
      --text: #fff;
      --text2: #e6e9f3;
      --text3: #d8dbe7;
      --textOp: #ffffff30;
      --bd: #2e313d;
      --bd2: #1b1d25;
      --bg: #090a0d;
      --bg2: #17171b;
      --bg3: #242529;
      --bgOp: #17171bee;
      --bgOp2: #17171bbb;
      --alert: #ff1e1e;
      --hover: contrast(50%);
      --shadow: #24252970;
    }
  `;
}

export default theme;
