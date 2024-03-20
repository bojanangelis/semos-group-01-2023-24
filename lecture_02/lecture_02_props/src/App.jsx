import './App.css'
import Card from './components/Card'
import MyCard from './components/MyCard'

// https://excalidraw.com/#json=yOGUYtVismh-MOAJ_oSFX,17Med_LcIqGsc4oYoZQJ6g
function App() {

  // homework !
  // airbnb clone so karticki
  return (
    <>
  {/* sekogash koga pushtame props pushtame od parent to child */}
      {/* <Card 
        img='https://a0.muscache.com/im/pictures/prohost-api/Hosting-899712497677761786/original/d97e69b3-d753-4ddb-bccc-d5348ae3b241.jpeg?im_w=720'
        price={262} // number
        date='Apr 16 – 21' //string
        title='Ostuni, Italy'
        description='356 kilometers away'
        /> */}
        <div className='list-of-cards'>

<MyCard 
    title='Ostuni, Italy '
    price={462} // number
    date='Apr 24 – 29' //string
    img='https://a0.muscache.com/im/pictures/prohost-api/Hosting-859241191388587730/original/748eb940-5282-4cb3-b434-9390bfa5def2.jpeg?im_w=720'
    description='400 kilometers away'
      />
<MyCard 
        title='Marina di'
        price={462} // number
        date='Apr 24 – 29' //string
        img='https://a0.muscache.com/im/pictures/miso/Hosting-51242253/original/fb055841-a2d0-4923-8443-86b0cb9892ca.jpeg?im_w=720'
        description='400 kilometers away'
        />

<MyCard 
        title='Ostuni, Italy 04'
        price={462} // number
        date='Apr 24 – 29' //string
        img='https://a0.muscache.com/im/pictures/030eee8d-cbb6-4f5b-893d-09d4787a15c5.jpg?im_w=720'
        description='400 kilometers away'
        />

    </div>
    </>

  )
}

const obj = {
  img: 'img',
  price: 321,
  date: 'date',
  title: 'title',
}

export default App







// export function App2() {
//   return (
//     <>
//      App 2
//     </>
//   )
// }