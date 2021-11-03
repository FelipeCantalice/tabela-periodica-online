import type { NextApiRequest, NextApiResponse } from 'next'
import { Elemento } from '../../../domain/entities/elemento'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id: string = req.query['id'] as string ?? ''
  const data = await (await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')).json()
  const elementos: Elemento[] = data.elements
  const elemento = elementos.find((e) => e.symbol?.toLowerCase() == id.toLowerCase())
  res.status(200).json({ elemento })
}
