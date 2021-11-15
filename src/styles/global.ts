import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${shade(0.2, '#312e38')};
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  .MuiSelect-icon {
    top: calc(50% - 12px);
    right: 0;
    position: absolute;
    pointer-events: none;
}
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
