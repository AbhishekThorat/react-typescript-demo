import * as React from 'react';
import styled, { StyledFunction } from "styled-components";
import { styledDiv } from "../../util/";

export const ContentWrapper = styledDiv`
    height: calc(100vh - 145px);
    padding: 12px;
    padding-bottom: 0;
    overflow: auto;
`;
