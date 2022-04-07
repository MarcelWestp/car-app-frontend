import React from "react";
import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const googleMapsApiKey = 'AIzaSyCyH9tROtDKihy8Pl6fuV4s7VBI0GVL2c8'

const containerStyle = {
  marginTop: 20,

  width: "80%",
  height: "1200px",
};

const GalleryMap = ({ address }) => {
  
  const [position, setPositon] = React.useState();

  React.useEffect(() => {
    const load = async () => {
      if(address === ""){
        setPositon({
          lat: 51.165691,
          lng: 10.451526
        });
      }else{
        await getGeocodeAddress(address);
      }
    };
    load();
  }, [address]);

  const getGeocodeAddress = async (address) => {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`;
    await fetch(geocodingUrl)
      .then((result) => result.json())
      .then((response) => {
        setPositon(response.results[0].geometry.location);
        console.log(response.results[0].geometry.location);
      });
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={7}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        {/* <Marker position={position} icon={require('../../../res/img/CarMapMarker.png')} /> */}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default React.memo(GalleryMap);