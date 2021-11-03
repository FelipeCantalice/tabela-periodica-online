import React, { ReactNode } from 'react'
import styles from './style'

interface Props {
    children: ReactNode
}

export default function GridContainer(props: Props) {
    const { children } = props
    return (
        <div className='container-grid'>
            
            {children}
            <style jsx>{styles}</style>
        </div>
    )
}
