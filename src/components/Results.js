import React, { Component } from 'react';

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {

        const items = this.props.results.map((item, key) =>
            <ul>
                <li key={item.id}>{item.title}</li>
                <li className={item.status === 'passed' ? 'passed':'failed'} >{item.status}</li>
            </ul>
        );

        return (
            <div className="results">
                {items}
            </div>
        );
    }
}

export default Results;