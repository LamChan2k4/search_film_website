import React from "react";
import MovieCard from './movieCard';

const MovieList = ({ movies })=> {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </div>
    );
};

export default MovieList;