import './App.css'
import Card from './components/Card'
import Kopche from './components/Kopche'
import Kopche01 from './components/Kopche01'
import KopcheAlert from './components/KopcheAlert'
import PlayButton from './components/PlayButton'

function App() {
  const handleClick = (event) => {
    event.preventDefault() // preventira refreshiranje na web stranata.
    // nativniot moment na html5 go preventira ustvari ne dozvoluva da se refreshira web stranata
    // nie ne sakame da gi izgubime informaciite koi gi cuvame vo state zatoa koristime event.preventDefault.
    console.log(event)
    alert('This is the App.jsx and its clicked!')
  }

  const movies = [
    'Avatar',
    'Avatar',
    'Lord of the rings',
    'Tetoviranje',
    'Duna',
    'Titanik',
    'Tetoviranje 2',
  ]

  const movieList = [
    {
      id: 'random-movie231321123213',
      title: 'Avatar',
      rating: '4.5',
    },
    {
      id: 'random241241321',
      title: 'Lord of the rings',
      rating: '4.5',
    },
    {
      id: 'bokapwko32k1po4',
      title: 'Duna',
      rating: '4.5',
    },
    {
      id: 'kaowpekapewokawepokawepok231421',
      title: 'Duna 2',
      rating: '4.5',
    },
  ]

  return (
    <>
      {/* ova e kratenka */}
      <button onClick={handleClick}>kopche</button>

      {/* <form>
        <input type='text' placeholder='Enter your name' />
        <button onClick={(e) => handleClick(e)}>Click</button>
      </form> */}

      <Kopche />
      <Kopche01 push={handleClick} />

      <KopcheAlert message='Kopche Alert 01'>
        <h2>This is children</h2>
      </KopcheAlert>

      <KopcheAlert message='Kopche Alert 02'>
        <p>This is children</p>
      </KopcheAlert>

      <Card>
        <h2>AVATAR MOVIE</h2>
        <img
          width={100}
          src='https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'
        />
        <p>Rating</p>
        <button>ok</button>
        <h4>Description</h4>
      </Card>
      {/* <button></button> */}

      <PlayButton handleClick={() => alert('This is Avatar movie')} movieName='Avatar' />

      {/* {movies.map((movie) => (
        // sekogash koga koristime key koristime unique key
        <p key={movie}>{movie}</p>
      ))} */}

      {movies.map((movie, i) => (
        // sekogash koga koristime key koristime unique key
        <p key={i}>{movie}</p>
      ))}

      {/* {movies.map((movie) => {
        return <p>{movie}</p>
      })} */}

      {movieList.map((film) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </>
  )
}

export default App
