import { FC } from "react";
import { CountryData } from "../static/countryCharacteristics";

interface CountryInfoProps {
  characteristics: CountryData;
}

const Characteristics: FC<CountryInfoProps> = ({ characteristics }) => {
  return (
    <div className="characteristics">
      <div className="characteristic">
        <span>{characteristics.name}</span> 
      </div>
      <div className="characteristic">
        <span>{characteristics.capital}</span>
      </div>
      <div className="characteristic">
        <span>{characteristics.population}</span>
      </div>
    </div>
  );
};

export default Characteristics;