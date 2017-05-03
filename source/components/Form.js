import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
        this.updatePreview = this.updatePreview.bind(this);
    }
    updatePreview(e) {
        const { target: { value, name } } = e;
        this.props.inputCallback({ value: (name === 'count' ? parseInt(value) : value), name });
    }
    submitForm(e) {
        e.preventDefault();
        this.props.submissionCallback({
            count: parseInt(this.Count.value),
            units: this.Unit.value,
            format: this.Format.value
        });
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="count">Count:</label>&nbsp;
                    <input
                        type="number"
                        name="count"
                        className="form-control"
                        ref={node => this.Count = node}
                        onInput={this.updatePreview}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="units">Unit:</label>&nbsp;
                    <select
                        name="units"
                        className="form-control"
                        ref={node => this.Unit = node}
                        onInput={this.updatePreview}
                    >
                        <option selected disabled>Select…</option>
                        <option value="words">Words</option>
                        <option value="sentences">Sentences</option>
                        <option value="paragraphs">Paragraphs</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="format">Format:</label>&nbsp;
                    <select
                        name="format"
                        className="form-control"
                        ref={node => this.Format = node}
                        onInput={this.updatePreview}
                    >
                        <option selected disabled>Select…</option>
                        <option value="plain">Plaintext</option>
                        <option value="html">HTML</option>
                    </select>
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-success"
                    />
                </div>
            </form>
        );
    }
}
