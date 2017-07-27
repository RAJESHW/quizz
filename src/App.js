import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            index: 0,
            isLoading: true,
            examFinished: false,
        }
    }
    componentDidMount() {
        fetch('./json/quiz.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    data: json,
                    isLoading: false,
                });
            });
    }
    handleClick = (e) => {
        let {index : indexCounter } = this.state;

        if (e.target.innerHTML === 'Previous') {
            this.setState({index: indexCounter-1});
        } else if (e.target.innerHTML === 'Next') {
            this.setState({index: indexCounter+1});
        } else if (e.target.innerHTML === 'Finish') {
            this.setState({ examFinished: true });
        }
    };
    renderData = () => {
        const { data, index } = this.state;
        const item = data.quiz[index];
        return (
            <div className="questions">
                <div className="App-intro">
                  <span>{ index + 1 + ')' }</span>  { item.question }
                </div>
                <div className="options">
                {item.options.map((element) =>
                    <div key={element}>
                        <input type="radio" name="options"/>{element}
                    </div>
                    )}
                </div>
                <div className="button-container">
                    { index !== 0
                    ? <button className="button" onClick={this.handleClick}>Previous</button>
                    : null }
                    <button className="button" onClick={this.handleClick}>{ this.isFinish() }</button>
                </div>
            </div> )
    };
    isFinish = () => {
        const { data, index } = this.state;
        const eachQuestion = data.quiz;
        debugger;
        if (eachQuestion[index] === eachQuestion[eachQuestion.length-1]) {
            return 'Finish';
        } else {
            return 'Next';
        }
    };
    renderExam = () => {
        const { isLoading, examFinished } = this.state;
        if (!examFinished) {
            if (!isLoading) {
                return this.renderData()
            } else {
                return (
                <div className="loader">
                    <img src="bgLoad.gif" alt="loading" />
                </div>
                );
            }
        } else {
            return ( <div className="finish-message"> Thank you for attending exam </div> );
        }
    }
    render() {
        return (
            <div className="App" >
                <div className="App-header">
                    <h2> Quizz </h2>
                </div>
                { this.renderExam() }
            </div>
        );
    }
}

export default App;