import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='card'>
                <div className='container'>
                    <img src={this.props.image} alt="John Wick" width="100%" height="230px"/>
                    <h2>{this.props.name}</h2>
                    <h4>{this.props.genre} - {this.props.year}</h4>
                </div>
            </div>
        );
    }
}

Movie.propTypes = {

};

export default Movie;