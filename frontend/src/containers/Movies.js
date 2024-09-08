import React, { Component, useState, useEffect } from 'react';
import Movie from '../components/Movie';
import { gql, useQuery } from '@apollo/client'

const ALL_MOVIES = gql`
    {
        movies{
            name
            genre
            year
            imageUrl
        }
    }
`
function DisplayMovies() {
    const { loading, error, data } = useQuery(ALL_MOVIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>
    if (!data.movies.length) return <p>Please add movie.</p>
    return <div className='movies'>
        {
            data.movies.map((movie) => {
                return <Movie key={movie.name}
                    name={movie.name}
                    genre={movie.genre}
                    year={movie.year}
                    image={movie.imageUrl} />
            })
        }
    </div>
}

class Movies extends Component {
    render() {
        return <DisplayMovies></DisplayMovies>
    }
}

export default Movies