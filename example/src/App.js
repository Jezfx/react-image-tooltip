import React, { Component } from "react";
import styled from "styled-components";
import fart from "./fart.gif";
import yeah from "./oh-yeah.gif";

import ReactImageTooltip from "react-image-tooltip";

const Button = styled.button`
  display: block;
  width: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        This is some random text and this is a{" "}
        <ReactImageTooltip image={yeah} width={300}>
          link
        </ReactImageTooltip>
        This is some random text and
        <br />
        <br />
        <br />
        This is some random text and this is a link
        <ReactImageTooltip image={yeah} width={300}>
          <button style={{ display: "block", width: "100%" }}>
            THIS IS A LINK
          </button>
        </ReactImageTooltip>
      </div>
    );
  }
}
