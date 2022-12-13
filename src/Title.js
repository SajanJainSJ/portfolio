import React, { Component } from 'react';

const TITLES = [
    'a Software Developer',
    'an Ex-IBMer',
    'a Music lover',
    'an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted');
        this.animateTitle();
    }

    componentWillUnmount() {
        console.log('Title component will unmount');
        clearInterval(this.titleInterval)
    }

    animateTitle = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 3000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;