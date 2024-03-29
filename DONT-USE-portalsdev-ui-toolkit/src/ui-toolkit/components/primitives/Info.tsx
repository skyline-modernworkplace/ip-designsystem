import React from "react";
import styled from "ui-toolkit/styled-components";
import { getThemeValue } from "../PortalsThemeProvider/PortalsThemeProvider";

const CLASS_NAME = "info-ui-toolkit";

export interface InfoProps {
  className?: string;
  as?: string;
  [key: string]: any;
}

const Info: React.FC<InfoProps> = ({
  children,
  className = "",
  as = "div",
  ...additionalProps
}) => {
  let cssClass = [CLASS_NAME, className].filter(Boolean).join(" ");
  return (
    <StyledInfo {...additionalProps} as={as} className={cssClass}>
      {children}
    </StyledInfo>
  );
};

export default Info;

const StyledInfo = styled.div`
  color: ${(props) => props.theme.semanticColors.bodySubtext};
  display: inline-block;
  font-size: 12px;
  .ignore-variant & {
    color: ${(props) => getThemeValue("global.bodySubtext", "#a19f9d")};
  }
`;
