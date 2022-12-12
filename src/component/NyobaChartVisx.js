import ParentSize from '@visx/responsive/lib/components/ParentSizeModern'
import React from 'react'
import { data } from './dataTestGraph'
import LineChart from './LineChart'

const NyobaChartVisx = () => {
    return (
        <>
            <ParentSize>
                {({ width, height }) =>
                    <LineChart data={data} width={width} height={height} />}
            </ParentSize>

        </>
    )
}

export default NyobaChartVisx