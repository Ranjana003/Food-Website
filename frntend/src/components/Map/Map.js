import React, { useState, useEffect } from 'react';
import classes from './map.module.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { toast } from 'react-toastify';
import * as L from 'leaflet';

function Map({ readonly, location, onChange }) {
  const [position, setPosition] = useState(location);

  return (
    <div className={classes.container}>
      <MapContainer
        className={classes.map}
        center={[0, 0]}
        zoom={1}
        dragging={!readonly}
        touchZoom={!readonly}
        doubleClickZoom={!readonly}
        scrollWheelZoom={!readonly}
        boxZoom={!readonly}
        keyboard={!readonly}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FindButtonAndMarker
          readonly={readonly}
          location={position}
          setPosition={setPosition}
          onChange={onChange}
        />
      </MapContainer>
    </div>
  );
}

function FindButtonAndMarker({ readonly, location, setPosition, onChange }) {
  // eslint-disable-next-line
  const map = useMapEvents({
    click(e) {
      !readonly && setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, 13);
    },
    locationerror(e) {
      toast.error(e.message);
    },
  });

  useEffect(() => {
    if (!readonly && location) {
      onChange(location);
    }
  }, [location, readonly, onChange]);

  // Run this effect only once after the component mounts
  useEffect(() => {
    // Effect logic here
  }, []);

  const markerIcon = new L.Icon({
    iconUrl: '/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <>
      {!readonly && (
        <button
          type="button"
          className={classes.find_location}
          onClick={() => map.locate()}
        >
          Find My Location
        </button>
      )}
      {location && (
        <Marker
          eventHandlers={{
            dragend: e => {
              setPosition(e.target.getLatLng());
            },
          }}
          position={location}
          draggable={!readonly}
          icon={markerIcon}
        >
          <Popup>Shipping Location</Popup>
        </Marker>
      )}
    </>
  );
}


export default React.memo(Map);
