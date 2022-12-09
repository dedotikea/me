import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

const MapCard = () => {
    return (
        <div>
            <Grid
                item xs={7}>
                <Card
                    elevation={5}>
                    <img src='https://assets.ppy.sh/beatmaps/1773145/covers/cover.jpg?1658392641%22);%20--bg-2x:%20url(%22https://assets.ppy.sh/beatmaps/1773145/covers/cover@2x.jpg?1658392641' alt='beatmapBg.jpg' className='beatmap-bg'></img>
                    <Typography component="h1" variant='subtitle1'>test subtitle1</Typography>
                </Card>
            </Grid>
        </div>
    )
}

export default MapCard

//Material Design's responsive UI is based on a 12-column grid layout.
//Jadi item xs={6} si item makan 6 kolom, artinya (12 / 6) = 2 item doang layoutnya