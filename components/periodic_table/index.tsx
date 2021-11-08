import React, { useEffect, useState } from 'react'
import { Elemento } from '../../domain/entities/elemento'
import AtomoItemSmall from '../atomo_item_small'

interface Props {
    elementos: Elemento[][]
}

export default function PeroidicTableViewComponent(props: Props) {
    const { elementos = [] } = props

    const [elements, setelements] = useState<Elemento[][] | null>(elementos)




    return (
        <div style={{ width: '200vw', overflow: 'scroll' }}>
            {elements && elements.map((elementsP) => (
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap'}} >
                    {(elementsP.map((elem) => (
                        <AtomoItemSmall elemento={elem} background_color={elem['cpk-hex']!} />
                        )))}
                    
                </div>
            ))}

        </div>
    )
}
