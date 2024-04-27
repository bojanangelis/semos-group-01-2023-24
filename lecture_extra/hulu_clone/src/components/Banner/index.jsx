import React, { useEffect, useState } from 'react'
import './style.scss'
const Banner = () => {
  const [movie, setMovie] = useState()
  const API_KEY = import.meta.env.VITE_REACT_TMDB_API_KEY

  const url_tmdb = `https://api.themoviedb.org/3/movie/934632?api_key=${API_KEY}&language=en-US`

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(url_tmdb)
      const data = await request.json()
      setMovie(data)
    }
    fetchData()
  }, [])

  return (
    <div
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center, center',
      }}
    >
      <div className='cover-grid' />
      <div className='banner__contents'>
        <h1 className='banner__title'>{movie?.title || movie?.name}</h1>
        <h1 className='banner__description'>{movie?.overview}</h1>
      </div>
      <div className='banner__fadeBottom' />
    </div>
  )
}

export default Banner
