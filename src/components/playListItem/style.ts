import * as React from "react";
import styled, { StyledFunction, css } from "styled-components";

const div: StyledFunction<{} & React.HTMLProps<HTMLInputElement>> = styled.div;

export const ItemWrapper = div`
    padding: .5em;
    width: 100%;
    float: left;
    background-color: #eff0f1;
    border-radius: 10px;
    margin-bottom: 12px;
`;

export const ItemThumnail = div`
  float: left;
  height: 80px;
  width: 80px;
  > img {
    height: inherit;
    width: inherit;
    border-radius: 10px;
  }
`;

export const ItemContent = div`
  float: left;
  margin-left: 8px;
  width: 300px;
`;

const commonTextProperties = css`
  font-size: 13px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.8px;
`;

export const ItemAuthor = div`
  font-weight: bold;
  margin-top: 5px;
  text-transform: uppercase;
  ${commonTextProperties}
`;

export const ItemTitle = div`
  ${commonTextProperties}
`;
