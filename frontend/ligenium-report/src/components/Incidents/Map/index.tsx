import { useState } from 'react';
import MapGL, { ViewStateChangeEvent, Source, Layer, MapLayerMouseEvent, Popup } from 'react-map-gl';
import { ReactMapboxGlCluster } from 'react-mapbox-gl-cluster';
import testdata from './testdata';

type Props = {};
interface PopupInfo {
  lngLat: [number, number];
  text: string;
}

const Map = (_props: Props) => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const [mapViewport, setMapViewport] = useState({
    height: '100vh',
    width: '100wh',
    longitude: 7.571606,
    latitude: 50.226913,
    zoom: 4,
  });

  const handleViewportChange = (e: ViewStateChangeEvent) => {
    const state = e.viewState;
    setMapViewport({
      ...mapViewport,
      longitude: state.longitude,
      latitude: state.latitude,
      zoom: state.zoom,
    });
  };
  const data = { type: 'FeatureCollection', features: testdata } as any;

  const handleClick = (event: MapLayerMouseEvent) => {
    const features = event.features || [];
    console.log(features);
    if (features.length > 0) {
      console.log(features![0]!.geometry);
      setPopupInfo({
        lngLat: [features![0]!.geometry!.bbox![0], features![0]!.geometry!.bbox![1]],
        text: features![0]!.properties!.title,
      });
    }
  };
  const onClose = () => {
    setPopupInfo(null);
  };

  const CustomSpiralComponent = ({ properties, ...restProps }: any) => {
    const onClick = (e: any) => {
      console.log(`Receive event onClick in spiral at properties: ${JSON.stringify(properties)}`);
    };
    return <div className="spiderifier-marker-content" onClick={onClick}></div>;
  };

  const CustomeMarkerComponent = ({ properties, className, cssObject }: any) => {
    const onClick = (e: any) => {
      console.log(`Receive event onClick in marker at properties: ${JSON.stringify(properties)}`);
    };
    return <div className={className} style={cssObject} onClick={onClick} />;
  };

  console.log(import.meta.env.VITE_MAPBOX_API);
  return (
    <MapGL
      {...mapViewport}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_API}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAPTILER_API}`}
      onMove={handleViewportChange}
    ></MapGL>
  );
};

export default Map;

/*      <ReactMapboxGlCluster
        data={data}
        onClick={handleClick}
        spiralComponent={CustomSpiralComponent}
        markerComponent={CustomeMarkerComponent}
        clusterClickEnabled={true}
      />*/
