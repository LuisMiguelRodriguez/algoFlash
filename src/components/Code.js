import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/keymap/vim');
require('codemirror/addon/edit/closebrackets');


class Code extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'function name(arg){ console.log(arg)}',
            data: null
        };
    }

    render() {
        return (
            <div className="code">
                <svg className="code__header" xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
                <CodeMirror 
                    value={this.state.value}
                    options={{
                        mode: 'javascript',
                        theme: 'material',
                        lineNumbers: true,
                        keyMap: 'vim',
                        autoCloseBrackets: true
                    }}
                    onChange={(editor, data, value) => {

                        console.log(value);
                    }}
                />
            </div>
        );
    }
}

export default Code;