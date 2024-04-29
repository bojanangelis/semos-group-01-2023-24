import React, { useEffect, useState } from 'react'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (fetchUrl) {
      async function fetchData() {
        // 2Authenticate
        // VITE_REACT_TMDB_API_KEY = tuka odi kluchot od https://developer.themoviedb.org/reference/intro/getting-started
        // https://developer.themoviedb.org/reference/intro/getting-started
        // VITE_REACT_APP_TMDB_URL=https://api.themoviedb.org/3
        const request = await fetch('https://api.themoviedb.org/3' + fetchUrl)
        const data = await request.json()
        setMovies(data.results)
        return request
      }
      fetchData()
    }
  }, [fetchUrl])
  const base_url = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className='row'>
      <h2 style={{ color: 'black' }}>{title}</h2>
      <div className='row__posters'>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <>
                <img
                  onClick={() => (modal ? null : navigate(`/movie/${movie.id}`))}
                  key={movie.id}
                  className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                  src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                />
                {movie.original_title}
              </>
            )
        )}
      </div>
    </div>
  )
}

export default Row
