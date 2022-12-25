import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'

// You should hide this
const api_key:string = "277839a8061898dcfac649e586de6186"

// Creates an object with pre-predefined values
const FirstHome = () => {
    return (
        <div>
            <h1 className="text-4xl text-center py-10">Movie rental system</h1>
            <div className="flex justify-center py-20">
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