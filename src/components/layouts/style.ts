import * as React from 'react';
import styled, { StyledFunction } from "styled-components";

const div: StyledFunction<{} & React.HTMLProps<HTMLInputElement>> = styled.div;

export const ContentWrapper = div`
    height: calc(100vh - 145px);
    padding: 12px;
    padding-bottom: 0;
    overflow: auto;
`;
