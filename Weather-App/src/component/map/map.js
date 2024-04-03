import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from '../location/location-pin'
import './map.scss'

const _onChildClick = (key, childProps) => {
    console.log("Some data is coming here: ", childProps)
}

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBF55rN6qdMv3Jz-pZAyQFIg6OnlwDIB5k' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                onChildClick={_onChildClick}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    </div>
)

export default Map