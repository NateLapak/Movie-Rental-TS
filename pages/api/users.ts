// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  username: string,
  password: string
}

export default function handler(req: NextApiRequest,res: NextApiResponse<User>) {
  if (req.method == "GET") {
      res.status(200).json(
        { 
            username: "YellowMustard",
            password: "Hello121"
        }
    )
  }

  else if (req.method == "POST") {
    const user = req.body.User
  }
}

