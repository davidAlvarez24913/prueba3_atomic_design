
import { useState, useEffect } from 'react'
import './Card.css'
import '../../node_modules/react-vis/dist/style.css'
import { FlexibleWidthXYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis'

export interface Props{
  data: Array<{
    x:number,
    y:number
}>
}


export const Card = ({data}:Props) =>{
  return (
        <div className="Card">
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

