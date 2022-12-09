import React from 'react'
import Map from 'react-map-gl'
import { NavLink } from 'react-router-dom'
import { MAPBOX_API_KEY } from '../routes/About'

const AboutMobile = () => {
  return (
    <div style={{ color: "white" }}>
      ini perangkat
      <div style={{ color: "red" }}>
        <NavLink
          className="textNav"
          to={`/layoutkasar`}>
          Mobile
        </NavLink>
      </div>
      <Map
        initialViewState={{
          latitude: -6.903363,
          longitude: 107.608138,
          zoom: 12,
          attributionControl: false
        }}
        style={{ width: "60vw", height: "50vh", marginTop: "50px", marginBottom: "50px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_API_KEY}>
      </Map>
    </div>
  )
}

export default AboutMobile

/*asset buat cms kt-bekang:
* sidebar kiri (referensi dari google maps pas ngeklik akun):
*   menuicon buat sidebar
*   closeicon buat sidebar
*   box buat nampilin user, settings, logout
*   avatar icon
*   setting icon
*   logout icon

* -card buat grafik
*/
