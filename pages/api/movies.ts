import type { NextApiRequest, NextApiResponse } from 'next'


type movie = {
  email: string,
  username: string,
  password: string,
}

// Fake users data
const movies: movie[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    res.status(200).redirect("/success")
  }
  
}