import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { question : {question} } = this.props;

    return(
      <div>
        {question}
      </div>
    )
  }
}

export default Question;