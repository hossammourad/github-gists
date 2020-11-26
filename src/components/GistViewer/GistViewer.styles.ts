import { css } from "@emotion/react";

import { colors, typography, units } from "../../styling";

export const section = css`
  padding: ${units.oneHalf};
  margin-bottom: ${units.one};
  border-radius: ${units.half};
  border: 1px solid ${colors.lightGray};
  transition: 0.2s;

  &:hover {
    border-color: ${colors.gray};
  }
`;

export const description = css`
  padding-bottom: ${units.half};
  margin-bottom: ${units.half};
  border-bottom: 1px dotted ${colors.lightGray};
`;

export const forksButton = css`
  margin-left: ${units.half};
`;

export const filesSection = css`
  margin: ${units.one} 0;
`;

export const filesLabel = css`
  margin-bottom: ${units.half};
`;

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
