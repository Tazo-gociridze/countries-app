import { FC } from "react";
import Img from "./Img";
import Characteristics from "./Characteristics";

export interface CountryCharacteristic {
  name: string;
  capital: string;
  population: string;
}

export const Wrapper: FC = () => {
  const countryCharacteristics: CountryCharacteristic[] = [
    {
      name: "Country: Georgia",
      capital: "Capital: Tbilisi",
      population: "population: 3 736,4 thousand",
    },

    {
      name: "Country: Georgia",
      capital: "Capital: Tbilisi",
      population: "population: 3 736,4 thousand",
    },

    {
      name: "Country: Georgia",
      capital: "Capital: Tbilisi",
      population: "population: 3 736,4 thousand",
    },

  ];

  return (
    <div className="country__section-wrapper">
      <Img />
      <Characteristics characteristics={countryCharacteristics} />
    </div>
  );
};
