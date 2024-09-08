import React, { Component } from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_MOVIE = gql`
    mutation AddMovie($name: String!, $genre: String!, $year: String!, $imageUrl: String!){
        addMovie(name: $name, genre: $genre, year: $year, imageUrl: $imageUrl){
            name
            genre
            year
            imageUrl
        }
    }
`

function CreateMovie() {
    let name
    let genre
    let year
    let imageUrl
    const [addMovie, { data, loading, error }] = useMutation(ADD_MOVIE)

    if (loading) return 'Submitting...'
    if (error) return `Submission error! ${error.message}`

    return (
        <div class="addMovie">
            <form onSubmit={e => {
                    e.preventDefault();
                    let movie = { 
                        variables: {
                            name: name.value, genre: genre.value, year: year.value, imageUrl: imageUrl.value 
                        }
                    }
                    addMovie(movie);
                    debugger
                }}>
                <label>Name</label>
                <input
                    ref={node => {
                        name = node
                    }}
                />
                <label>Genre</label>
                <input
                    ref={node => {
                        genre = node
                    }}
                />
                <label>Year</label>
                <input
                    ref={node => {
                        year = node
                    }}
                />
                <label>Image URL</label>
                <input
                    ref={node => {
                        imageUrl = node
                    }}
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

class AddMovie extends Component {
    constructor(props) {
        super(props)

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
        return <CreateMovie></CreateMovie>
    }
}

AddMovie.propTypes = {

}

export default AddMovie