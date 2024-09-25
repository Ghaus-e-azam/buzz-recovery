import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const GoogleMapView = ()=> {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    return (
   <div>
    <LoadScript 
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>

        <GoogleMap
        mapContainerStyle={{width:"100%",height:"50vh"}}
        center={{lat: 51.530936721429605, lng: -0.6206727421327252}}  
        zoom={16.25}>
            <Marker position={{lat: 51.530936721429605, lng: -0.6206727421327252}} />
        </GoogleMap>

    </LoadScript>
   </div>
    )
    
}
export default GoogleMapView;