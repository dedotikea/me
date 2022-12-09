import React from 'react'
import { MAPBOX_API_KEY } from '../routes/About'
import Map from 'react-map-gl'

const AboutDesktop = () => {
  return (
    <div style={{ color: "white" }}>
      ini perangkat
      <div style={{ color: "blue" }}>
        Desktop
      </div>
      <Map
        initialViewState={{
          latitude: -6.903363,
          longitude: 107.608138,
          zoom: 12,
          attributionControl: false
        }}
        style={{ width: "50vw", height: "50vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_API_KEY}>
      </Map>
    </div>
  )
}

export default AboutDesktop