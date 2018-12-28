import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

require('react-markdown/with-html');


class Questions extends Component {
    state = {
        questions: ""    
    };

    componentDidMount() {
       this._retrieveQuestions(); 
    }

    _retrieveQuestions() {
        fetch('/api/questions')
            .then(response => response.json())
            .then(questions => {
                this.setState(questions);
                console.log(this.state);
            });
    }

    render() {
        return (
            <div className="markdown-area">
                <ReactMarkdown
                    source={this.state.questions}
                    escapeHtml={false}
                />
            </div>
        );
    }
};

export default Questions;