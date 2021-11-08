import React from 'react'
import { Elemento } from '../../domain/entities/elemento'
import styles from './style'

interface IData {
    elemento: Elemento
    background_color?: string
    onClick?: (elemento: Elemento) => void
  }

export default function AtomoItemSmall(data: IData) {
    const { elemento,background_color = 'FFFFFF ' } = data

    if(elemento.name != null){
        return (
            <div className='small-item' style={{backgroundColor: `#${background_color}`}}>
                <p>{elemento.symbol}</p>
                <p>{elemento.name}</p>
                <style jsx>{styles}</style>
            </div>
        )
    }

    return (
        <div className='small-item' style={{backgroundColor: `lightblue`}}>
            <p> </p>
                <p> </p>
            <style jsx>{styles}</style>
        </div>
    )
}
