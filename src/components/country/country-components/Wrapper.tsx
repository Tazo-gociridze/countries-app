import { FC } from "react";
import Img from "./Img";
import Characteristics from "./Characteristics";
import { CountryData } from "../static/countryCharacteristics";
import { Link } from "react-router-dom";


interface WrapperProps {
  characteristics: CountryData;
  flagType: string;
}

const Wrapper: FC<WrapperProps> = ({ characteristics, flagType }) => {

  const id = characteristics.id

  return (
    <Link to={`/country/${id}`} className="country__section-wrapper">
      <Img flagType={flagType} />
      <Characteristics characteristics={characteristics} />
    </Link>
  );
};

export default Wrapper;