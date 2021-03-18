import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

const output = 'C:\\Users\\Pillowfication\\ws\\iwannamarrylulupillow.date\\results'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ ok: 'ok' })
  fs.appendFileSync(output, JSON.stringify(req.body) + '\n')
}
