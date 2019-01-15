import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ReactImageTooltip extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };

  state = {
    display: false,
    mouseX: 0,
    mouseY: 0
  };

  toogleImage = () => {
    this.setState({
      display: !this.state.display
    });
  };

  handleMouseOver = event => {
    console.log(event.clientX);
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY
    });
  };

  render() {
    const { children, image } = this.props;

    const childrenStyles = {
      display: "inline-block",
      position: "relative",
      zIndex: 1
    };

    const imageStyles = {
      top: `${this.state.mouseY - 50}px`,
      left: `${this.state.mouseX - 50}px`,
      width: this.props.width ? `${this.props.width}px` : "300px",
      height: this.props.height ? `${this.props.height}px` : "100%",
      pointerEvents: "none",
      position: "fixed",
      background: `url(${this.props.image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      zIndex: 0
    };

    return image ? (
      <span
        onMouseEnter={this.toogleImage}
        onMouseLeave={this.toogleImage}
        onMouseMoveCapture={this.handleMouseOver}
        onTouchStart={() => this.setState({ display: false })}
      >
        <span style={this.state.display ? childrenStyles : null}>
          {children}
        </span>
        {this.state.display && <span style={imageStyles} />}
      </span>
    ) : (
      children
    );
  }
}
