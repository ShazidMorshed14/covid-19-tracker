import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import "./Map.css";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 200,
  },
  recovered: {
    hex: "#7fff00",
    multiplier: 300,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 500,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

//Draw circles
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info-name"></div>
          <div className="info-confirmed">
            <p>
              <h3>{country.country}</h3>
              <h5 className="cases_box">
                Cases: {numeral(country.cases).format("0,0")}
              </h5>
              <h5 className="recovered_box">
                Recovered: {numeral(country.recovered).format("0,0")}
              </h5>
              <h5 className="deaths_box">
                Deaths: {numeral(country.deaths).format("0,0")}
              </h5>
            </p>
          </div>
        </div>
      </Popup>
    </Circle>
  ));
