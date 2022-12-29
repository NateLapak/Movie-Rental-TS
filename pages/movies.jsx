import Navbar from "../Components/Navbar"
import MovieOne from "../Components/Moviespage/MoviesOne"
import Footer from "../Components/Footer"

const trendingEndpoint = "https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.API_KEY
const highestRatedEndpoint = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + process.env.API_KEY + "&language=en-US&page=1"
const upcomingEndpoint = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + process.env.API_KEY + "&language=en-US&page=1"

export async function getServerSideProps() {

    // Fetch trending data from movie db api
    const trendingRes = await fetch(trendingEndpoint);
    const trendingData = await trendingRes.json();

    // Fetch highest rated data from external api
    const highestRatedRes = await fetch(highestRatedEndpoint)
    const highestRatedData = await highestRatedRes.json()

    // Fetch upcoming movies
    const upcomingRes = await fetch(upcomingEndpoint)
    const upcomingData = await upcomingRes.json()

    return {
        props: {
            trending: trendingData,
            highestRated: highestRatedData,
            upcoming: upcomingData,
        }
    }
}


const movies = ({trending, highestRated, upcoming}) => {
    return (
        <div>
            <Navbar />
            <MovieOne trending={trending} highest={highestRated} upcoming={upcoming}/>
            <Footer />
        </div>
    )
}
export default movies