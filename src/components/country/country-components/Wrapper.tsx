import { FC } from "react";
import Img from "./Img";
import { CountryData } from "../static/countryCharacteristics";
import { Link } from "react-router-dom";
import Characteristics from "./Characteristics";

interface WrapperProps {
  flagType: string;
  el: CountryData;
  countryIndex: number;
  countryState: CountryData[];
  countrySetState: React.Dispatch<React.SetStateAction<CountryData[]>>;
}

const Wrapper: FC<WrapperProps> = ({flagType, el, countryIndex, countryState, countrySetState}) => {
  const id = el.id;

  return (
    <div className="country__section-wrapper">
      <Link to={`/country/${id}`} >
        <Img flagType={flagType} />
      </Link>
      <Characteristics el={el} index={countryIndex} countryState={countryState} countrySetState={countrySetState}/>
    </div>
  );
};

export default Wrapper;
