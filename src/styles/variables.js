import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #ffff;
    --white2: rgba(255, 255, 255, 0.2);
    --white3: rgba(255, 255, 255, 0.7);
    --white4: rgba(242, 242, 242, 0.4);
    --white5: #f2f2f2;
    --white6: #eee;
    --white7: #f8f8f8;
    --white8: #cccccc;
    --white-gray: #ddd;
    --white-gray2: #aaa;
    --black: #000000;
    --black2: #252525;
    --black3: #333333;
    --black4: #111;
    --black5: #666666;
    --orange: #deb887;
    --orange2: #fede99;
    --gray: #e6e6e6;
    --gray2: #7e7d7d;
    --gray3: rgb(126, 125, 125);
    --gray4: #f2f2f2;
    --gray5: rgba(17, 17, 17, 0.5);
    --gray6: #f5f5f5;
    --green: #62c584;
    --brown: #696969;
    --brown2: #212529;
    --black-bg: rgba(0, 0, 0, 0.9);
    --black-bg2: #333333;
    --black-bg3: rgba(0, 0, 0, 0.5);
    --black-bg4: rgba(0, 0, 0, 0.2);
    --black-bg5: rgba(0, 0, 0, 0.3);
    --purple: #740374;
    --dark-purple: #360536;
    --blue: #0c0cc1;
    --blue-hover: #1313f6;

    --transition: all 0.2s ease-in-out 0s;

    --fs14: clamp(0.75rem, calc(0.7rem + 0.24vw), 0.88rem);
    --fs16: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem);
    --fs20: clamp(1.13rem, calc(1.08rem + 0.24vw), 1.25rem);
    --fs24: clamp(1.25rem, calc(1.15rem + 0.49vw), 1.5rem);
    --fs33: clamp(1.75rem, calc(1.63rem + 0.61vw), 2.06rem);

    --ln32: clamp(1.5rem, calc(1.3rem + 0.98vw), 2rem);

    --gap30: clamp(1.56rem, calc(1.44rem + 0.61vw), 1.88rem);
    --gap40: clamp(1.88rem, calc(1.63rem + 1.22vw), 2.5rem);
    --gap50: clamp(1.88rem, calc(1.39rem + 2.44vw), 3.13rem);
    --gap95: clamp(4.38rem, calc(3.77rem + 3.05vw), 5.94rem);
  }
`;

export default variables;
