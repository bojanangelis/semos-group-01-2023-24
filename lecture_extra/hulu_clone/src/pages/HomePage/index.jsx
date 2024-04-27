import React from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import requests from '../../utils/requets'
import Row from '../../components/Row'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Header />
      <Banner />
      <Row title='NEARLY ADDED MOVIES' fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}

export default HomePage
