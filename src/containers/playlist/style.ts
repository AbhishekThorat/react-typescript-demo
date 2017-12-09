import * as React from "react";
import styled, { StyledFunction } from "styled-components";
import { ItemWrapper as CardStyle  } from "../../components/playListItem/style";

const div: StyledFunction<{} & React.HTMLProps<HTMLInputElement>> = styled.div;

export const PlaylistWrapper = div`
    width: 400px;
    margin: 0 auto;
`;

export const ErrorInfoPanel = CardStyle.extend`
    padding: 20px;
    color: black;
    width: calc(100% - 40px);
    text-align: center;
`;