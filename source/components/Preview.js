import React, { Component } from "react";

export default class Preview extends Component {
    render() {
    	const { count, units, format } = this.props.data
        return (
            <pre>// Preview:
                {`
{
  count: ${count ? count : 0 },
  units: '${units ? units : 'null' }',
  format: '${format ? format : 'null' }'
}`}
            </pre>
        );
    }
}
