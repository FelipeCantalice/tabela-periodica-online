import React from 'react'
import PeroidicTableViewComponent from '../../components/periodic_table'

export default function TabelaPeriodicaView({ elements }: any) {
    return (
        <div style={{padding: 20, backgroundColor: 'lightblue'}}>
            <PeroidicTableViewComponent elementos={elements} />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/tabela')
    const elements = await res.json()
  
    return {
      props: {
        elements: elements.data,
      },
    }
  }