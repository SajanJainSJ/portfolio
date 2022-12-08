import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        // this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My Name is Sajan. I am Software Developer</p>
                <p>I am looking forward to work on React JS</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Bangalore</p>
                        <p>My favorite language is Javascript</p>
                        <button onClick={this.toggleDisplayBio.bind(this)}>Show Less</button>
                    </div>
                ) : (
                    <button onClick={this.toggleDisplayBio.bind(this)}>Read more</button>
                )}
            </div>
        )
    }
}

export default App;