import * as React from "react";
import styled from "styled-components";
import { ItemWrapper as CardStyle  } from "../../components/playListItem/style";
import { styledDiv } from "../../util";

export const PlaylistWrapper = styledDiv`
    width: 400px;
    margin: 0 auto;
`;

export const ErrorInfoPanel = styled(CardStyle)`
    padding: 20px;
    color: black;
    width: calc(100% - 40px);
    text-align: center;
`;