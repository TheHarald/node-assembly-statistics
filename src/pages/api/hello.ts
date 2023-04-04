import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


const data = [
  { name: 'John Doe' },
  { name: 'Josdffdhn Doe1' },
  { name: 'Joasdhn Doe2' },
  { name: 'Johdsfn Doe3' },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(data)
}
