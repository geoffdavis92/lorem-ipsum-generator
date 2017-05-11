import React, { Component } from "react";

const ToastStyles = {
  position: "absolute",
  top: "2em",
  right: "-275px",
  transition: ".45s right",
  width: "275px"
};

export default class Toast extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.close = this.close.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log("toast.componentWillReceiveProps()", nextProps);
    if (nextProps.alertDispatched) {
      this.setState(
        state => ({ isOpen: true }),
        () => console.log("toast.componentWillReceiveProps()", this.state)
      );
    }
  }
  close(e) {
    if (e) {
      this.setState(
        state => ({ isOpen: false }),
        () => {
          this.props.updateAppState({ alert: { dispatched: false } });
          console.log("toast.close(e)", this.state);
        }
      );
    } else {
      setTimeout(
        () => {
          this.setState(
            state => ({ isOpen: false }),
            () => {
              this.props.updateAppState({ alert: { dispatched: false } });
              console.log("toast.close()", this.state);
            }
          );
        },
        2500
      );
    }
  }
  render() {
    console.log("toast.render()", this.props);
    const { alertType, alertText, alertDispatched } = this.props;
    const assignStyles = () => {
      let dispatchedToastStyles;
      if (this.state.isOpen && alertDispatched) {
        dispatchedToastStyles = Object.assign({}, ToastStyles, {
          right: "2em"
        });
      } else {
        dispatchedToastStyles = ToastStyles;
      }
      return dispatchedToastStyles;
    };
    return (
      <div
        className="alert alert-success alert-dismissible"
        style={assignStyles()}
        role="alert"
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={this.close}
          data-close="immediate"
        >
          <span aria-hidden="true">×</span>
        </button>
        <strong style={{ textTransform: "capitalize" }}>{alertType}!</strong>
        {" "}
        {alertText}
      </div>
    );
  }
}
