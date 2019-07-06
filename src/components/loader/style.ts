import * as React from 'react';
import styled, { StyledFunction } from "styled-components"
import { styledDiv } from "../../util/";

export const LoaderWrapper = styledDiv`
  width: 50px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
  > div {
  background-color: #333;
  height: 100%;
  width: 10px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

  > :nth-child(2n) {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  > :nth-child(3n) {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  > :nth-child(4n) {
   -webkit-animation-delay: -0.9s;
   animation-delay: -0.9s;
  }

  > :nth-child(5n) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
      transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
`;
