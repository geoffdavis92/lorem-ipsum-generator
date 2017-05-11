import React, { Component } from "react";
import { render as Render } from "react-dom";
import LoremIpsum from "lorem-ipsum";

import Form from "./components/Form";
import Preview from "./components/Preview";
import Output from "./components/Output";
import Toast from "./components/Toast";

import close from "./utilities/closeToast";

const alertSettings = {
  type: "success",
  text: "Text has been copied."
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      _: false,
      count: 0,
      units: "",
      format: "",
      output: "",
      alert: {
        dispatched: false
      }
    };
    this.sendToPreview = this.sendToPreview.bind(this);
    this.generateText = this.generateText.bind(this);
    this.dispatchAlert = this.dispatchAlert.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", e => {
      console.log("resize", this);
      this.setState(state => ({ _: !state._ }));
    });
  }
  updateState(newState) {
    this.setState(state => newState);
  }
  sendToPreview({ name, value }) {
    console.log({ [name]: value });
    this.setState(state => ({ [name]: value }));
  }
  generateText() {
    const { count, units, format } = this.state;
    const output = LoremIpsum({ count, units, format });
    // console.log(window.LI({ count, units, format }))
    // console.log({ output });
    // console.log(LoremIpsum);
    this.setState(state => ({ output }));
  }
  dispatchAlert() {
    this.setState(
      state => ({
        alert: { dispatched: true }
      }),
      () => {
        // console.log('app.dispatchAlert()',this.state.alert);
        close(this.Toast);
      }
    );
  }
  render() {
    const { count, units, format, output, alert } = this.state;
    // console.log('rendered app state.alert', this.state.alert)
    return (
      <section style={{ position: "static" }}>
        <Toast
          alertDispatched={alert.dispatched}
          alertType={alertSettings.type}
          alertText={alertSettings.text}
          updateAppState={this.updateState}
          ref={node => this.Toast = node}
        />
        <div className="row">
          {window.innerWidth <= 768 &&
            <div className="col-sm-5">
              <br />
              <Preview data={{ count, units, format }} />
            </div>}
          <div className="col-sm-7">
            <Form
              inputCallback={this.sendToPreview}
              submissionCallback={this.generateText}
            />
          </div>
          {window.innerWidth > 768 &&
            <div className="col-sm-5">
              <br />
              <Preview data={{ count, units, format }} />
            </div>}
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Output text={output} clickCallback={this.dispatchAlert} />
          </div>
        </div>
      </section>
    );
  }
}

Render(<App />, document.querySelector("#root"));
