import { css } from "@emotion/react";

import { colors, typography, units } from "../../styling";

export const overlay = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10;

  background-color: ${colors.darkGray};
  opacity: 0.2;
`;

export const modalWrapper = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  overflow: auto;
  z-index: 100;

  background-color: ${colors.white};
  border: 5px solid ${colors.gray};
  padding: ${units.triple};
`;

export const closeButton = css`
  position: absolute;
  right: ${units.half};
  top: ${units.half};
  cursor: pointer;
`;

export const fileContent = css`
  white-space: break-spaces;
  font-size: ${typography.smallText};
`;
