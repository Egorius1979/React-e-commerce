import React from 'react'
// import axios from 'axios'
import Header from './header'
import Card from './card'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  // const good = axios('../../server/data.json').then((it) => it.data)
  // console.log(JSON.stringify(good))
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Card />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
