import { css } from "styled-components";
export const phone = (props) => {
  return css`
    @media only screen and (max-width: 400px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `;
};
