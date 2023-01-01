// Post the email address and password to the users api
const registerUser = async () => {
    const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            email: "d",
            password: "",
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

const Register = () => {

    return (
        <div className="py-20">
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                    <h1 className="text-4xl text-center my-10">Register for an account</h1>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1
                                className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/api/users" method="post">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                        email</label>
                                    <input type="email" name="email" id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required placeholder="name@company.com"/>
                                </div>
                                <div>
                                    <label 
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="username" name="username" placeholder="*******"
                                        required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                </div>
                                <div>
                                    <label 
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password</label>
                                    <input type="password" name="password" id="password"
                                        placeholder="••••••••"
                                        required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <button type="submit" onSubmit={registerUser}
                                    className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                                    an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/login"
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
                                    here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register