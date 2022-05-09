import React, {useState, useEffect}  from "react";
import {Meta} from '@storybook/react'
import {Card} from './Card'
import '../index.css'
const meta: Meta = {
    title: 'Card',
    component: Card
}

interface Data{
  x:number,
  y:number
  }

  const INITIAL_STATE = [
    {
      fecha: '08/04/2022',
      ventas: 40
    },
    {
      fecha: '07/04/2022',
      ventas: 32
    },
    {
      fecha: '08/04/2022',
      ventas: 40
    },
    {
      fecha: '12/04/2022',
      ventas: 342
    },
    {
      fecha: '16/04/2022',
      ventas: 123
    },
    {
      fecha: '22/04/2022',
      ventas: 32
    }
  ]
  const aux = INITIAL_STATE.map((d) => {
    return ({
      x: parseInt(d.fecha.slice(0, 2)),
      y: d.ventas
    })
  })
  

export default meta;

export const Default = () => {
    const [data, setData] = useState<Array<Data>>([])

    useEffect(() => {
      setData(data)
    })

    return(
        <div className = 'App'>
         <h1>Datos</h1>
            <Card data={aux}/>
        </div>
    )

}
