import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

// You should hide this
const api_key:string = "277839a8061898dcfac649e586de6186"

// Creates an object with pre-predefined values
const FirstHome = () => {
    return (
        <div>
            <h1 className="text-4xl text-center py-10">Movie rental system</h1>

            <div className='items-center'>
                <form className="flex items-center">   
                    <label className="simple-search sr-only">Search</label>
                    <div className="relative w-half">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>

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
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Movie title</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Movie info
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-20">
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Movie title</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Movie info
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                </div>
            </div>
        </div>
        )
    }

export default FirstHome