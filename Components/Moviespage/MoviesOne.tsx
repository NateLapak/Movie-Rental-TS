const Movies = () => {

    function movies(movielist: Array<string>) {
        for(let i = 0; i < movielist.length; i++) {
            console.log(movielist[i])
        }
    }

    var movielist:Array<string> = ["Shawshank redemption, top gun, One Piece Red"]

    return (
        <div>
            <h2>Movie list</h2>
        </div>
    )
}

export default Movies