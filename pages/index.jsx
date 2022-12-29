import Navbar from '../Components/Navbar'
import FirstHome from '../Components/Homepage/FirstHome'
import Footer from '../Components/Footer'

const trendingEndpoint = "https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.API_KEY

export async function getServerSideProps() {

  // Fetch trending data from movie db api
  const trendingRes = await fetch(trendingEndpoint);
  const trendingData = await trendingRes.json();
  
  return {
      props: {
          trending: trendingData,
      }
  }
}


const Home = ({trending}) => {

  return (
      <div>
        <Navbar />
        <FirstHome results={trending}/>
        <Footer />
      </div>
  )
}

export default Home
