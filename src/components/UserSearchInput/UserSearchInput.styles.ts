import { css } from "@emotion/react";

import { colors, units } from "../../styling";

export const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${units.one};
  padding-bottom: ${units.one};
  border-bottom: 1px solid ${colors.gray};
`;

export const title = css`
  display: flex;
  align-items: center;
`;

export const githubIcon = css`
  margin-right: ${units.half};
`;

export const input = css`
  margin-right: ${units.one};
`;
