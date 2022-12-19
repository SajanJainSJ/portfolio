import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "../assets/profile.jpg";
import Title from "./Title";
import Header from "./Header";
class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <Header />
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>My Name is Sajan.</p>
                {this.state.displayBio ? <Title /> : null}
                <p>I am looking forward to work on React JS</p>
                {this.state.displayBio ? (
                    <div>
                        <p>I live in Bangalore</p>
                        <p>My favorite language is Javascript</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                ) : (
                    <button onClick={this.toggleDisplayBio}>Read more</button>
                )}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;