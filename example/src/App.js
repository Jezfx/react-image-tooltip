import React, { Component } from "react";
import fart from "./fart.gif";

import ReactImageTooltip from "react-image-tooltip";

export default class App extends Component {
  render() {
    return (
      <div>
        This is some random text and this is a link{" "}
        <ReactImageTooltip image={fart} width={300}>
          <a href="#">THIS IS A LINK</a>
        </ReactImageTooltip>
      </div>
    );
  }
}
