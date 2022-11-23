import React from "react";

// React leaflet
import { MapContainer, TileLayer, Marker, Popup, WMSTileLayer, LayersControl, LayerGroup } from 'react-leaflet'
import { Icon } from 'leaflet'

// Map icons
import forestMuzeumIcon from './Assets/Mapicons/forestMuzeumIcon.png'
import iconShadow from './Assets/Mapicons/iconShadow.png'
import forestMuseumsData from './Data/forestMuseumsData.json'

// Legend images
import forestMuseumImage from './Assets/Legendimages/forestMuseumImage.png'
import nadlesnictwaImage from './Assets/Legendimages/nadlesnictwaImage.png'
import rdlpImage from './Assets/Legendimages/rdlpImage.png'

// MUI imports
import { Typography, Button } from '@mui/material'


function MyMap() {

  const forestMuseumIcon = new Icon({
    iconUrl: forestMuzeumIcon,
    iconSize: [30, 40],
    shadowUrl: iconShadow,
    shadowSize: [40, 25],
    iconAnchor: [15, 40],
    shadowAnchor: [0, 25],
    popupAnchor: [0, -35]

  });

  return (
    <div style={{ height: "90vh" }}>

      <MapContainer center={[52.11, 19.21]} zoom={6} scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">
          <LayersControl.Overlay checked name={`<img src=${forestMuseumImage}></img> Jednostki muzealne LP`
          }>
            <LayerGroup>
              {forestMuseumsData.features.map(forestMuseum => (
                <Marker
                  key={forestMuseum.properties.JEDN_MUZ}
                  position={[
                    forestMuseum.geometry.coordinates[1],
                    forestMuseum.geometry.coordinates[0]
                  ]}
                  icon={forestMuseumIcon}
                >
                  <Popup>
                    <Typography variant="h6" align="center">{forestMuseum.properties.JEDN_MUZ}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <img
                        alt=""
                        src={forestMuseum.properties.FOTO}
                        style={{ height: "14rem", width: "18rem" }}
                      />
                    </div>
                    <Button variant="contained" fullWidth style={{ backgroundColor: '#006453', color: 'white', marginTop: '0.5rem' }} href={forestMuseum.properties.MAIL}>
                      ZOBACZ WIĘCEJ
                    </Button >
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name={`<img src=${nadlesnictwaImage}></img> Nadleśnictwa`
          }>
            <WMSTileLayer url="http://mapserver.bdl.lasy.gov.pl/arcgis/services/WMS_BDL_kat_wlasnosci/MapServer/WmsServer?" format="image/png" transparent='true' tiles='true' layers="5">
            </WMSTileLayer>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name={`<img src=${rdlpImage}></img> RDLP`
          }>
            <WMSTileLayer url="http://mapserver.bdl.lasy.gov.pl/arcgis/services/WMS_BDL_kat_wlasnosci/MapServer/WmsServer?" format="image/png" transparent='true' tiles='true' layers="6">
            </WMSTileLayer>
          </LayersControl.Overlay>

        </LayersControl>

      </MapContainer>
    </div >
  );
}

export default MyMap;
