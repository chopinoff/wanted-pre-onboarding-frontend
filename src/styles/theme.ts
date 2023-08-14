import { css } from '@emotion/react';

function theme() {
  return css`
    :root {
      --main: #f9d853;
      --mainOp: #f9d853bc;
      --text: #090a0d;
      --text2: #121319;
      --text3: #1b1d25;
      --border: #bcc0cf;
      --border2: #d8dbe7;
      --bg: #f5f7ff;
      --bg2: #e6e8f0;
      --bg3: #d0d2dc;
      --bgOp: #d8dbe7ee;
      --bgOp2: #d8dbe7bb;
      --alert: #ff1e1e;
      --hover: contrast(30%);
      --shadow: 0px 10px 10px #00000030;
    }
    [data-theme='dark'] {
      --main: #f9d853;
      --mainOp: #f9d853bc;
      --text: #fff;
      --text2: #e6e9f3;
      --text3: #d8dbe7;
      --border: #2e313d;
      --border2: #1b1d25;
      --bg: #090a0d;
      --bg2: #17171b;
      --bg3: #242529;
      --bgOp: #17171bee;
      --bgOp2: #17171bbb;
      --alert: #ff1e1e;
      --hover: contrast(50%);
      --shadow: 0px 10px 10px #ffffff30;
    }
  `;
}

export default theme;
