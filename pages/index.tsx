import Navbar from '../Components/Navbar'
import FirstHome from '../Components/Homepage/FirstHome'
import Footer from '../Components/Footer'

const Home = () => {

  return (
      <div>
        <Navbar />
        <FirstHome movies={undefined}/>
        <Footer />
      </div>
  )
}

export default Home
