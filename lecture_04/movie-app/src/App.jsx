import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [category, setCategory] = useState('')

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const API_KEY = '3e90f27c10d6ace8edc1f40e84f98b61'
  
  useEffect(() => {
    // logic go here
    const fetchData = () => {
      fetch(`https://api.themoviedb.org/3/${category}/all/week?api_key=${API_KEY}&language=en-US`)
          .then(response => response.json())
          .then(response => setMovies(response.results))
          .catch(err => console.error(err));
    }
    fetchData()

  }, 
  // this is dependecy array 
  [category])


    // fetchData()

  

  return (
    <>
    <div>
      <button onClick={() => setCategory('trending')}>Trending</button>
      <button onClick={() => setCategory('horror')}>Horror</button>
      <button onClick={() => setCategory('action')}>Action</button>
    </div>

    <div style={{display: 'flex'}}>
      {movies?.map((movie) => (
        <div style={{marginLeft: '25px'}} key={movie.id}>
          <img width={340} height={500} className="img" src={BASE_URL + movie.poster_path} alt="" />
          <p>{movie.title ?? movie.name}</p>
        </div>
      ))}
      </div>
      
    </>
  )
}

export default App
