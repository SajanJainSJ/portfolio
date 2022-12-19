import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { displayJokes: false, joke: {}, jokes: [] };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response) => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then((response) => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));
    }

    toggleDisplayJokes = () => {
        if (!this.state.displayJokes) this.fetchJokes();
        this.setState({ displayJokes: !this.state.displayJokes });
    }


    render() {
        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <h3>Want ten new jokes?</h3>
                {this.state.displayJokes ? (
                    <>
                        <button onClick={this.toggleDisplayJokes}>Close!</button>
                        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
                    </>
                ) : (
                    <button onClick={this.toggleDisplayJokes}>Click me!</button>
                )}
            </div>
        )
    }
}

export default Jokes;