import React, { useState } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'

export default function AlertsHeatMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 31.57566616888998,
    longitude: 34.69456108481244,
    zoom: 8.5,
  })
  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100vh"
      maxZoom={9.5}
      minZoom={8.5}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Source type="geojson" data={props.geoData}>
        <Layer {...{
          type: 'heatmap',
          paint: {
            'heatmap-weight': {
              property: 'count',
              type: 'exponential',
              stops: [
                [1, 0],
                [62, 1],
              ],
            },
            'heatmap-radius': 40,
            'heatmap-opacity': 0.3,
          },
        }}
        />
      </Source>
    </MapGL>
  )
}
