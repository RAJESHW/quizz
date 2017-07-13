import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
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

    render() {
        const { data, index } = this.state;
        const item = data.quiz[index];
        return (
            <div className="App" >
                <div className="App-header">
                    <h2> Quizz </h2>
                </div>
                { item
                ?   <div>
                        <div className="App-intro">
                            { item.question }
                        </div>
                        <div>
                            { item.options }
                        </div>
                     </div>
                : <img src="bgLoad.gif" alt="loading" />
                }
            </div>
        );
    }
}

export default App;