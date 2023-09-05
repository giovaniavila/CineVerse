import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import '../styles/Movie.grid.css'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const home = () => {
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    };

    useEffect(() => {

        //passar a url e a keyApi dentro de uma variavel
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedURL)

    }, [])

    return (
        <div>
            <div className="container">
                <h2 className="title">melhores filmes: </h2>
                <div className="movies-container">
                    {topMovies.length === 0 && <p>Carregando...</p> }
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id}  movie= {movie} />)}
                </div>
            </div>
        </div>
    )
}

export default home;