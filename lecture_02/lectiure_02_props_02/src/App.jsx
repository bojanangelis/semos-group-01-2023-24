import './App.css'
import Profile from './components/Profile'
import AvatarImage from './assets/person.jpeg'
import IsPrivate from './components/NewProfile'

function App() {
  // homework
  // 01. da kreirate nova react app.
  // 02. vo App.jsx da importirate nova komponenta PackageList.
  // 03. vo PackageList treba da imate nekolku items kade shto vo sekoj item imate text i boolean isPacked
  // 04. Vo Item componenta treba da prikazete imeto i da prikazete chekmark ako go ima ili x ako go nema boolean.

  // ✅  ❌
  // X   <

  const person = {
    name: 'Bojan',
    isPrivate: false,
    age: 25,
    avatar_img: null,
    // avatar_img: AvatarImage,
  }

  return (
    <>
      <Profile
        // isPrivate={person.age <= 25}
        isPrivate={!person.avatar_img}
        name={person.name}
        age={person.age}
        avatar_img={person.avatar_img}
      />

      <>------------------------------------------------------------------------------</>

      <Profile isPrivate={false} name='Mike' age={25} avatar_img={AvatarImage} />

      <>------------------------------------------------------------------------------</>

      <IsPrivate isPrivate={true} />

      <>------------------------------------------------------------------------------</>

      <IsPrivate isPrivate={false} />
    </>
  )
}

export default App
