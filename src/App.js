import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            index: 0,
        }
    }
    componentDidMount() {
        fetch('./json/quiz.json')
            .then(res => res.json())
            .then(json => {
                this.setState({data: json});
            });
    }
    handleClick = (e) => {
        console.log(e.target, this); // eslint-disable-line
        let {index : indexCounter } = this.state;
        this.setState({index: indexCounter+1})
    }
    render() {
        const { data, index } = this.state;
        const item = Object.keys(data).length !== 0 ? data.quiz[index] : {};
        return (
            <div className="App" >
                <div className="App-header">
                    <h2> Quizz </h2>
                </div>
                { Object.keys(item).length !== 0
                ?   <div>
                    {console.log(item) }
                        <div className="App-intro">
                            { item.question }
                        </div>
                        <div>
                            {item.options.map((element) =>
                                <div key={element}>
                                    <input type="radio" name="options"/>{element}
                                </div>
                            )}
                        </div>
                        <button onClick={this.handleClick}>Next</button>
                     </div>
                : <img src="bgLoad.gif" alt="loading" />
                }
            </div>
        );
    }
}

export default App;