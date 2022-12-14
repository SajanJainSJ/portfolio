import React, { Component } from 'react';

const TITLES = [
    'a Software Developer',
    'an Ex-IBMer',
    'a Music lover',
    'an adventure seeker'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        console.log('Title component has mounted');
        this.animateTitle();
    }

    componentWillUnmount() {
        console.log('Title component will unmount');
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitle = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex, fadeIn: true });
            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
        }, 3000);
    }

    render() {
        const { fadeIn, titleIndex } = this.state;
        const title = TITLES[titleIndex];
        return (
            <p class={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;