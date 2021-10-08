import React from 'react';

class ArticleBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            timer: 100
        };
    }

    addCounter = () => {
        this.setState((prevState, prevProps) => ({
            counter: prevState.counter + 1
        }))
    }

    addTimer = () => {
        this.setState((prevState, prevProps) => ({
            timer: prevState.timer + 100,
            counter: 0
        }))
    }

    render() {
        return <div>
            <h1>{this.props.title || '-'}</h1>
             <p>{this.props.description || 'Brak opisu'}</p>
             <p>{this.state.counter}</p>
             <p>{this.state.timer}</p>
            <button onClick={this.addCounter}>Dodaj</button>
            <button onClick={this.addTimer}>Dodaj timer</button>
        </div>
    }
}

export default ArticleBox;