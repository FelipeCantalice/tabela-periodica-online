import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const elements = await (await fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')).json()
  
  const data: any = [[], [], [], [], [], [], [], [], [], [], []]

  for (let i = 1; i < 12; i++) {
      for (let j = 1; j < 19; j++) {
          const elementsA = elements['elements'].find((e: any) => e.ypos == i && e.xpos == j)
          data[i - 1][j - 1] = (elementsA != null) ? elementsA : {}
      }
  }
  
  res.status(200).json({ data })
}
