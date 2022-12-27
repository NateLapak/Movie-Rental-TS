// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// You should hide this
const api_key = process.env.API_KEY

type Movies = {
    results: [
        {
            id: number,
            title: string,
            overview: string,
            vote_average: number,
            vote_count: number,
        }
    ]
}

export default(req: NextApiRequest, res: NextApiResponse) => {
    const Data = fetch("https://api.themoviedb.org/3/trending/all/day?api_key=" + process.env.API_KEY)
    res.status(200).json(
        {
            results: [
                {
                    id: 23,
                    title: "Knives out",
                    overview: "Great",
                    vote_average: 23,
                    vote_count: 343
                }
            ]
        }
    )
}

