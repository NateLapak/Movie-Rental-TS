const Movies = () => {

    return (
        <div className="text-center container mx-auto">
            <h2 className="text-4xl py-10">Movie list</h2>

            <div className="my-5">
                <h1 className="text-3xl">Trending</h1>
                <div className="flex justify-center py-20">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                        <img className="p-0" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"></img>
                        <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Movie title</h2>
                        <h4 className="text-gray-900 text-l text-center">Release date</h4>
                        <p className="text-gray-700 text-base mb-4 text-center">
                            Movie info
                        </p>

                        <div>
                            <h1 className="float-left">Vote score</h1>
                            <h1 className="float-right">Vote count</h1>
                        </div>

                        <br/>
                        
                        <div>
                            <p className="float-left">8.6/10</p>
                            <p className="float-right">1025</p>
                        </div>

                        <button type="button" className="inline-block px-10 py-2.5 my-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Rent</button>
                    </div>
                </div>
            </div>

            <div className="my-5">
                <h1 className="text-3xl">Highest rated</h1>
                <div className="flex justify-center py-20">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                        <img className="p-0" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"></img>
                        <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Movie title</h2>
                        <h4 className="text-gray-900 text-l text-center">Release date</h4>
                        <p className="text-gray-700 text-base mb-4 text-center">
                            Movie info
                        </p>

                        <div>
                            <h1 className="float-left">Vote score</h1>
                            <h1 className="float-right">Vote count</h1>
                        </div>

                        <br/>
                        
                        <div>
                            <p className="float-left">8.6/10</p>
                            <p className="float-right">1025</p>
                        </div>

                        <button type="button" className="inline-block px-10 py-2.5 my-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Rent</button>
                    </div>
                </div>
            </div>

            <div className="my-5">
                <h1 className="text-3xl">Upcoming</h1>
                <div className="flex justify-center py-20">
                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                        <img className="p-0" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"></img>
                        <h2 className="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Movie title</h2>
                        <h4 className="text-gray-900 text-l text-center">Release date</h4>
                        <p className="text-gray-700 text-base mb-4 text-center">
                            Movie info
                        </p>

                        <div>
                            <h1 className="float-left">Vote score</h1>
                            <h1 className="float-right">Vote count</h1>
                        </div>

                        <br/>
                        
                        <div>
                            <p className="float-left">8.6/10</p>
                            <p className="float-right">1025</p>
                        </div>

                        <button type="button" className="inline-block px-10 py-2.5 my-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Rent</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Movies