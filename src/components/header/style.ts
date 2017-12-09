import * as React from "react";
import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<{} & React.HTMLProps<HTMLInputElement>> = styled.div;

export const HeaderWrapper = div`
  background-color: #686868;  
  padding: 1vh;
  top: 0;
  text-align: center;
  position: relative;
  height: 50px;
`;

export const HeaderContent = div`
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.8px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
