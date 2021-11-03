import React from 'react'
import { Elemento } from '../../domain/entities/elemento'
import styles from './style'

interface IData {
  elemento: Elemento
  background_color?: string
  onClick?: (elemento: Elemento) => void
}

export default function AtomoItem(data: IData) {
  const { elemento, onClick, background_color = 'FFFFFF' } = data
  return (
    <div className='container' onClick={() => onClick ? onClick(elemento) : null}>

      <div style={{backgroundColor: `#${background_color}`}}>
        <div className='description'>
          <p>{elemento.symbol}</p>
          <p>{elemento.name}</p>
        </div>

        <div className='shells'>{elemento.shells.map((shell, i) => <span key={i}>{shell}</span>)}</div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}
