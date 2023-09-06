import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../styles/Movie.grid.css'

const search = () => {
    const [topMovies, setTopMovies] = useState([])

    const [searchParams] = useSearchParams();
    const [movies,setMovie] = useState([])
    const query = searchParams.get("q")


    const getSearchedMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data.results)
    };

    useEffect(() => {

        //passar a url e a keyApi dentro de uma variavel
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query} `

        getSearchedMovie(searchWithQueryURL)

    }, [query])


    return (
        <div>
            <div className="container">
                <h2 className="title">resultados para: <span className="query-text"> {query} </span> </h2>
                <div className="movies-container">
                    {movies.length === 0 && <p>Carregando...</p> }
                    {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id}  movie= {movie} />)}
                </div>
            </div>
        </div>
    )
}

export default search