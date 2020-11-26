import { css } from "@emotion/react";

import { colors, typography, units } from "../../styling";

export const singleFile = css`
  display: flex;
  align-items: center;
  margin-bottom: ${units.half};

  &::last-of-type {
    margin-bottom: 0;
  }
`;

export const fileIcon = css`
  color: ${colors.gray};
  margin-right: ${units.quarter};
`;

export const fileName = css`
  font-size: ${typography.smallText};
  margin-right: ${units.half};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const fileBadge = (language: string) => {
  return css`
    font-size: ${typography.smallText};
    background-color: ${colors.languages[language] || colors.languages.other};
    color: ${colors.white};
    padding: 0 ${units.quarter};
    border-radius: ${units.quarter};
  `;
};
