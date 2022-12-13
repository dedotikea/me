import React, { useEffect, useState } from 'react'
import { Brush, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const NyobaRecharts = () => {
    //nyoba recharts

    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page D', uv: 200, pv: 2400, amt: 2400 },
        { name: 'Page E', uv: 300, pv: 2400, amt: 2400 },
    ];


    return (
        <div>
            <LineChart
                width={600}
                height={300}
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
                <Brush></Brush>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default NyobaRecharts