import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  email: string,
  username: string,
  password: string,
}

// Fake users data
const users: User[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    res.status(200).redirect("/")
  }
  
  // Get data from your database
  if (req.method == "POST") {
    users.push(req.body)
    res.status(200).redirect("/login")
  }

}