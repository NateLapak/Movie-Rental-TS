const Success = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="h-screen">
                <div className="bg-white p-6  md:mx-auto">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto mt-5">
                        <path fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                        </path>
                    </svg>
                    <div className="text-center py-10">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Success!</h3>
                        <p className="text-gray-600 my-2">Thank you for registering with us and we hope you enjoy your movie.</p>
                        <p> Have a great day!  </p>
                        <div className="pt-10 text-center mt-10">
                            <a href="/login" className="px-12 mx-10 bg-blue-600 mx- hover:bg-indigo-500 text-white font-semibold py-3">
                                Login to your account
                            </a>
                            <a href="/movies" className="px-12 mx-10 bg-blue-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                Go back to movie list
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success