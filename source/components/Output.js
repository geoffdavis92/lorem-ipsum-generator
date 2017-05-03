import React, { Component } from 'react'

export default class Output extends Component {
	constructor() {
		super()
	}
	render() {
		const { text } = this.props
		return text !== '' && <textarea value={text}/>
	}
}