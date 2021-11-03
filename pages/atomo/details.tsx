import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import GoBack from '../../components/goback'
import { Elemento } from '../../domain/entities/elemento'
import styles from './styles'
export default function AtomoDetails({ element }: any) {

    const [elemento, setelemento] = useState<Elemento>(element)


    // useEffect(() => {
    //     console.log(element)
    // }, [])

    return (
        <>
            
            <div className='container'>
            <GoBack />
                <div className='intro'>
                    <div className='symbol'>
                        <p>{elemento.symbol}</p>
                    </div>
                    <div>
                        <p>{elemento.name}</p>
                        <p>{elemento.summary}</p>

                    </div>
                </div>

                <div className='descriptions'>
                    <div className='item'>
                        <span className='title'>Apparence</span><br />
                        <span className='value'>{elemento.atomic_mass}</span>
                    </div>

                    <div className='item'>
                        <span className='title'>Density</span><br />
                        <span className='value'>{elemento.density}</span>
                    </div>

                    <div className='item'>
                        <span className='title'>Melt</span><br />
                        <span className='value'>{elemento.melt}</span>
                    </div>

                    <div className='item'>
                        <span className='title'>Period</span><br />
                        <span className='value'>{elemento.period}</span>
                    </div>

                    <div className='item'>
                        <span className='title'>Number</span><br />
                        <span className='value'>{elemento.number}</span>
                    </div>

                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/atomo/${context.query.id}`)
    const data = await res.json()

    return {
        props: {
            element: data.elemento,
        },
    }
}
