import { useState } from 'react'
import ReactMapGL, { ViewStateChangeEvent } from 'react-map-gl'

type Props = {}

const Map = (props: Props) => {
  const [mapViewport, setMapViewport] = useState({
    height: '100vh',
    width: '100wh',
    longitude: 7.571606,
    latitude: 50.226913,
    zoom: 4
  })

  const handleViewportChange = (e: ViewStateChangeEvent) => {
    const state = e.viewState
    setMapViewport({
      ...mapViewport,
      longitude: state.longitude,
      latitude: state.latitude,
      zoom: state.zoom
    })
  }

  return (
    <ReactMapGL
      {...mapViewport}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${
        import.meta.env.VITE_MAPTILER_API
      }`}
      onMove={handleViewportChange}
    ></ReactMapGL>
  )
}

export default Map
