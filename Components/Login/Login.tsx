const Login = () => {

return (
    <div>
       <section className="container mx-auto text-center">
            <div className="w-15 py-20">
                <h1 className="text-5xl">Login</h1>

                <div className="w-15 py-10">
                    <label>Username</label>
                    <br/>
                    <input type="text border-6 border-indigo-500/100"></input>
                </div>

                <div className="w-15 py-10">
                    <label>Password</label>
                    <br />
                    <input></input>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>

            </div>
       </section>
    </div>
    )
}

export default Login