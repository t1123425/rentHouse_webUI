import React from 'react';
import GoogleMapReact from 'google-map-react';

interface posObj {
    lat:number,
    lng:number
}
interface PropsType {
    zoom?:number,
    center?:posObj
}

const defaultProps:PropsType = {
    center:{
        lat: 59.95,
        lng: 30.33
    },
    zoom:10
}
const Map = (props:PropsType) =>{
    return (
        <div className="mapWrap">
            <GoogleMapReact 
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            ></GoogleMapReact>
        </div>
    )
}

Map.defaultProps = defaultProps;

export default Map;