import * as React from "react";
import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<{} & React.HTMLProps<HTMLInputElement>> = styled.div;

export const FooterWrapper = div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #242424;
  height: 30px;
  padding-top: 20px;
  margin-bottom: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const FooterContent = div`
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;
