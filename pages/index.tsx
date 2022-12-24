import Navbar from '../Components/Navbar'
import FirstHome from '../Components/Homepage/FirstHome'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

// String that holds the url for the api request
const defaultEndpoint:string = "https://api.themoviedb.org/3/movie/550?api_key=277839a8061898dcfac649e586de6186"

const Home = () => {

  return (
      <div>
        <Navbar />
        <FirstHome/>
      </div>
  )
}

export default Home
