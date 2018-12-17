import React, { Component } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import axios from 'axios';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/keymap/vim');
require('codemirror/addon/edit/closebrackets');


class Code extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: `
// ## Bean Counting

// You can get the Nth character, or letter, from a string by writing 
// "string".charAt(N), similiar to how you get this "s".length. The 
// returned valuewill be a string containing only one character (for
//  example, "b"_. The first character has position zero, which causes 
// the last one to be found at positin string.length -1. In other words,
// a two-chracter string has length 2, and its characters have position 0 and 1.).

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string.

// Next, write a function called countChar that behave like countBs, except it takes a second argument that indicates the character that is to be
// counted ( rather than counting only uppercase "B" character). Rewrite  countBs to make use of this new function.

const functions = {
    countB (str) {
        
    },
    countChar (str, char) {
        
    }
}


module.exports = functions;
            `,
            data: null
        };
        this.props = props;
        console.log(props)
        console.log(props.something);
        this.submit = this.submit.bind(this);
    }


    submit() {

        // this.props.resultHandler(['blah'])
        const value = this.state.value;

        axios.post('/api/test', {
            value
        })
            .then(( response )=> {
                // this.setState({data: response.data}) 
                this.props.resultHandler(response.data)
                // console.log(response.data.obj);
            })
            .catch(function (error) {
                console.log(error);
            });


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
                        this.setState({ value });
                        console.log(value);
                    }}
                />
                <button onClick={this.submit} >Submit</button>

            </div>
        );
    }
}

export default Code;