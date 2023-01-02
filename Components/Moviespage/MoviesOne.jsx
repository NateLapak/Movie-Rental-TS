const baseUrl = "http://image.tmdb.org/t/p/w500"

const toasterRender = () => {

}

const Movies = ({trending, highest, upcoming}) => {

    return (
        <div className="text-center container mx-auto">
            <h2 className="text-4xl py-10">Movie list</h2>
            <div className='container mx-auto'>
                <form>   
                    <label className="simple-search sr-only">Search</label>
                    <div className="relative w-half">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-3xl">Trending movies</h1>
                <div className="flex justify-center py-20">
                    {trending.results.slice(0, 3).map(result => {
                        return (
                            <div key={result.id} className="block p-5 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                                <img className="p-0" src={baseUrl + result.poster_path}></img>
                                <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">{result.title ?? result.original_name}</h2>
                                <h4 className="text-gray-900 text-l text-center">{result.release_date ?? result.first_air_date}</h4>
                                
                                <p className="text-gray-700 text-base mb-4 text-center">
                                    {result.overview.slice(0, 150)}...
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
                                    <button onSubmit = {toasterRender} form="movieForm" type="submit" className="container mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Rent</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="my-5">
                <h1 className="text-3xl">Highest rated movies</h1>
                <div className="flex justify-center py-20">
                    {highest.results.slice(0, 3).map(result => {
                        return (                            
                            <div key={result.id} className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                                <img className="p-0" src={baseUrl + result.poster_path}></img>
                                <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">{result.title ?? result.original_title}</h2>
                                <h4 className="text-gray-900 text-l text-center">{result.release_date ?? result.first_air_date}</h4>
                                <p className="text-gray-700 text-base mb-4 text-center">
                                    {result.overview.slice(0, 150)}...
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
                                    <button onSubmit = {toasterRender} form="movieForm" type="submit" className="container mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Rent</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="my-5">
                <h1 className="text-3xl">Upcoming movies</h1>
                <div className="flex justify-center py-20">
                    {upcoming.results.slice(0,3).map(result => {
                        return (
                            <div key={result.id} className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                                <img className="p-0" src={baseUrl + result.poster_path}></img>
                                <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">{result.title ?? result.original_title}</h2>
                                <h4 className="text-gray-900 text-l text-center">{result.release_date ?? result.first_air_date}</h4>
                                <p className="text-gray-700 text-base mb-4 text-center">
                                {result.overview.slice(0, 150)}...
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
                                    <button onSubmit = {toasterRender} form="movieForm" type="submit" className="container mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">Rent</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Movies