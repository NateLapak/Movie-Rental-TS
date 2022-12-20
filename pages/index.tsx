import Navbar from '../Components/Navbar'
import FirstHome from '../Components/Homepage/FirstHome'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
      <div>
        <Navbar />
        <FirstHome />
      </div>
  )
}

export default Home
