
import { useState, useEffect } from 'react'
import './Card.css'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleWidthXYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'

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
const data = INITIAL_STATE.map((d) => {
  return ({
    x: parseInt(d.fecha.substr(0, 2)),
    y: d.ventas
  })
})

export interface dataStats{
    x:number,
    y:number
}

export const Card = () => {
  const [atrib, setAtrib] = useState<Array<dataStats>>([])
  console.log(data)

  useEffect(() => {
    setAtrib(data)
  }, [])

  return (
        <div className="Card">
            <h5 className="title">Nro de datos mostrados:{atrib.length}</h5>
            <div className="body">
            <FlexibleWidthXYPlot height={300}>
                    <XAxis />
                    <YAxis />
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <LineSeries data={data} />
            </FlexibleWidthXYPlot>
            </div>
        </div>
  )
}
export default Card
