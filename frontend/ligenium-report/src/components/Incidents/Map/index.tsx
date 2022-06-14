import { useState } from 'react'
import MapGL, { ViewStateChangeEvent, Source, Layer } from 'react-map-gl'
import { heatmapLayer } from './heatmapLayer'
import testdata from './testdata'

type Props = {}

const Map = (_props: Props) => {
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
  const data = { type: 'FeatureCollection', features: testdata } as any

  return (
    <MapGL
      {...mapViewport}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${
        import.meta.env.VITE_MAPTILER_API
      }`}
      onMove={handleViewportChange}
    >
      {data && (
        <Source type='geojson' data={data}>
          <Layer {...heatmapLayer} />
        </Source>
      )}
    </MapGL>
  )
}

export default Map
