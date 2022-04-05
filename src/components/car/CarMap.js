import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const googleMapsApiKey = 'AIzaSyCyH9tROtDKihy8Pl6fuV4s7VBI0GVL2c8'

const containerStyle = {
  width: "90%",
  height: "230px",
};

const CarMap = ({address}) => {
  const [position, setPositon] = React.useState();

  React.useEffect(() => {
    const load = async () => {
      await getGeocodeAddress(address.street + " " + address.number + ", " + address.city);
    };
    load();
  }, []);

  const getGeocodeAddress = async (address) => {
    const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleMapsApiKey}`;
    await fetch(geocodingUrl)
      .then((result) => result.json())
      .then((response) => {
        setPositon(response.results[0].geometry.location);
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
        zoom={11}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        <Marker position={position} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default React.memo(CarMap);