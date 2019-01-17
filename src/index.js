import React, { Component } from "react";
import PropTypes from "prop-types";

import { randomString } from "./utils";

export default class ReactImageTooltip extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    image: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };

  state = {
    display: false,
    clientX: 0,
    clientY: 0
  };

  uniqueClassName = randomString(4);

  toogleImage = () => {
    this.setState(prevState => ({
      display: !prevState.display
    }));
  };

  handleMouseOver = event => {
    const { clientX, clientY } = event;
    this.setState({
      clientX,
      clientY,
      display: true
    });
  };

  render() {
    const { children, image, width, height } = this.props;
    const { display, clientY, clientX } = this.state;

    return (
      <React.Fragment>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .${this.uniqueClassName}:after {
              visibility: ${display ? "visible" : "hidden"};
              opacity: ${display ? "1" : "0"};
              top: ${clientY - 50}px;
              left: ${clientX - 50}px;
            }
          `
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .${this.uniqueClassName}:after {
              background-image: url(${image});
              width: ${width ? `${width}px` : "300px"};
              height: ${height ? `${height}px` : "100%"};
              pointer-events: none;
              position: fixed;
              background-size: contain;
              background-repeat: no-repeat;
              z-index: -1;
              content: "";
            }
          }
          `
          }}
        />
        <span
          onMouseEnter={() => this.toogleImage()}
          onMouseLeave={() => this.toogleImage()}
          onMouseMoveCapture={this.handleMouseOver}
          onTouchStart={() => this.setState({ display: false })}
          className={this.uniqueClassName}
        >
          {children}
        </span>
      </React.Fragment>
    );
  }
}
