import { css } from "@emotion/react";

import { colors, typography, units } from "../../styling";

export const forksSection = css`
  margin-top: 1rem;
`;

export const forksList = css`
  display: flex;
  align-items: center;
`;

export const forksLabel = css`
  margin-top: ${units.oneHalf};
  margin-bottom: ${units.half};
`;

export const singleFork = css`
  display: flex;
  align-items: center;
  color: ${colors.black};
  border-radius: ${units.quarter};
  margin-right: ${units.half};
  padding: ${units.half};
  text-decoration: none;
  border: 1px solid ${colors.lightGray};
  transition: 0.2s;

  &:hover {
    border-color: transparent;
    background-color: ${colors.lightGray};
  }
`;

export const userAvatar = css`
  width: ${units.triple};
  height: auto;
  border-radius: ${units.quarter};
  margin-right: ${units.half};
`;

export const noForks = css`
  display: inline-block;
  background-color: ${colors.yellow};
  color: ${colors.darkGray};
  font-size: ${typography.smallText};
  padding: ${units.half};
  border-radius: ${units.quarter};
  margin-top: ${units.half};
`;
