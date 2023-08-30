import { useState, useEffect } from "react";

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
            {topMovies && topMovies.map((movie) => <p> {movie.title} </p>)}
        </div>
    )
}

export default home;