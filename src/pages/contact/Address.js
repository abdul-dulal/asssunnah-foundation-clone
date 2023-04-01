import React from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const Address = () => {
  const { t } = useTranslation();
  const position = [51.505, -0.09];

  return (
    <div>
      <div className="bg-white rounded-md shadow-lg my-10">
        <h2 className="text-xl">{t("contact.address")}</h2>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        ,<p>hello</p>
      </div>
      <div className="bg-white rounded-md shadow-lg my-10 p-6 space-y-2">
        <h2 className="text-xl">{t("contact.fullad")}</h2>
        <h2>{t("contact.add")}</h2>
        <div>
          <p>{t("contact.desc")}</p>
          <p>{t("contact.desc2")}</p>
          <p>{t("contact.desc3")}</p>
        </div>
        <p className="text-lg">{t("contact.phone")}</p>
        <p>+88-09610-001089</p>
        <p className="text-lg">{t("contact.emailad")}</p>
        <p>assunnahfoundationbd@gmail.com</p>
      </div>
    </div>
  );
};

export default Address;
