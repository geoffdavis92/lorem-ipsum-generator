import React, { Component } from "react";
import { render as Render } from "react-dom";

import Form from "./components/Form";
import Preview from "./components/Preview";
import Output from "./components/Output";

import LoremIpsum from './utilities/loremIpsum'

class App extends Component {
    constructor() {
        super();
        this.state = { count: 0, units: '', format: '', output: '' }
        this.sendToPreview = this.sendToPreview.bind(this);
        this.generateText = this.generateText.bind(this);
    }
    sendToPreview({ name, value }) {
    	console.log({ [name]: value })
    	this.setState(state => ({ [name]: value }))
    }
    generateText() {
    	const { count, units, format } = this.state
    	const output = LoremIpsum({ count, units, format })
    	console.log({ output })
    	console.log(LoremIpsum)
    	this.setState(state => ({ output }))	
    }
    render() {
    	const { count, units, format, output } = this.state
        return (
            <section>
                <div className="row">
                    <div className="col-sm-8">
                        <Form
                            inputCallback={this.sendToPreview}
                            submissionCallback={this.generateText}
                        />
                    </div>
                    <div className="col-sm-4">
                    	<br/>
                    	<Preview data={{ count, units, format }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Output text={output}/>
                    </div>
                </div>
            </section>
        );
    }
}

Render(<App />, document.querySelector("#root"));
