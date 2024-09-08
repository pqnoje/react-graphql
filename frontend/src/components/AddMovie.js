import React, { Component } from 'react';
import { gql, useMutation } from '@apollo/client'
import { flowRight as compose } from 'lodash'

const ADD_MOVIE = gql`
    mutation AddMovie($name: String!, $genre: String!, $year: String!){
        addMovie(name: $name, genre: $genre, year: $year){
            name
            genre
            year
        }
    }
`

function CreateMovie() {
    let input;
    const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div class="addMovie">
            <form onSubmit={e => {
                    e.preventDefault();
                    let variables = { name: e.target[0].value, genre: e.target[1].value, year: e.target[2].value }
                    addMovie(variables);
                    input.value = '';
                }}>
                <label>Name</label>
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <label>Genre</label>
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <label>Year</label>
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

class AddMovie extends Component {
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

    submitMovie = (event) => {
        event.preventDefault()

    }

    render() {
        return <CreateMovie></CreateMovie>
    }
}

AddMovie.propTypes = {

};

export default AddMovie;