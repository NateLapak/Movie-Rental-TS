import Link from "next/link"

const baseUrl = "http://image.tmdb.org/t/p/w500"

const FirstHome = ({results}) => {
    return (
        <div>
            <h1 className="text-4xl text-center py-10">Movie rental system</h1>

            <div className="text-center my-10">
                <h2 className="text-4xl py-10">Overview</h2>
                <p className="text-lg">
                    Needed to rent a movie for a night? We got you covered! This movie rental system 
                    is a completly free movie rental system where users can rent out movies for a maximum of 2 days.
                    <br />
                    All you have to do is signup and login to your account to start renting movies.
                </p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded m-10">
                    <Link href="/register">
                        Sign up
                    </Link>
                </button>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded m-10">
                    <Link href="/login">
                        Login
                    </Link>
                </button>
            </div>

            <h1 className="text-4xl text-center mt-10">Currently trending movies</h1>

            <div className="flex justify-center py-20">
                {results.results.slice(0,3).map(result => {
                    return (
                        <div key={result.id} className="block p-5 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                            <img className="p-0" src={baseUrl + result.poster_path}></img>
                            <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">{result.title ?? result.original_name}</h2>
                            <h4 className="text-gray-900 text-l text-center">{result.release_date ?? result.first_air_date}</h4>
                            <p className="text-gray-700 text-base mb-4 text-center">
                                {result.overview}
                            </p>

                            <div>
                                <h1 className="float-left">Vote score</h1>
                                <h1 className="float-right">Vote count</h1>
                            </div>

                            <br/>
                            
                            <div>
                                <p className="float-left">{result.vote_average}</p>
                                <p className="float-right">{result.vote_count}</p>
                            </div>

                            <div>
                                <form action="/api/movies" method="POST" id="movieForm"></form>
                                <button form="movieForm" type="submit" className="container mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Rent</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <div className="text-center my-10">
                <h2 className="text-4xl py-5">Site created by Nathan Lapak</h2>
            </div>
        </div>
        )
    }

export default FirstHome