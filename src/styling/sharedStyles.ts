import { css } from "@emotion/react";

import { units, colors, typography } from "./index";

export const input = css`
  padding: ${units.half};
  border-radius: ${units.quarter};
  border: 1px solid ${colors.lightGray};
  font-size: ${typography.text};
  margin-right: ${units.one};

  &:focus {
    outline-color: ${colors.green};
  }
`;

export const button = css`
  padding: ${units.half} ${units.one};
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${typography.text};
  border-radius: ${units.quarter};
  border: 2px solid ${colors.darkGreen};
  cursor: pointer;
  transition: 0.3s;
  outline: none;

  &:hover {
    background-color: ${colors.darkGreen};
  }
`;
