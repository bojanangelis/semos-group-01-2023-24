import React, { useEffect, useState } from 'react'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (fetchUrl) {
      async function fetchData() {
        const request = await fetch(import.meta.env.VITE_REACT_APP_TMDB_URL + fetchUrl)
        const data = await request.json()
        setMovies(data.results)
        return request
      }
      fetchData()
    }
  }, [fetchUrl])
  const base_url = 'https://image.tmdb.org/t/p/original/'
  console.log(movies)
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
