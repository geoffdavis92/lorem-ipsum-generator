import React, { Component } from "react";

const OutputStyles = {
  cursor: 'pointer',
  fontFamily: "monospace",
  resize: "none",
  width: "100%",
  minHeight: "15em"
};

export default class Output extends Component {
  constructor() {
    super();
    this.copyText = this.copyText.bind(this);
  }
  copyText({ target }) {
    target.select();
    document.execCommand("copy");
    target.blur();
    this.props.clickCallback()
  }
  render() {
    const { text } = this.props;
    return text !== "" &&
      <textarea
        value={text}
        className="form-control"
        style={OutputStyles}
        readOnly
        onClick={this.copyText}
      />;
  }
}
