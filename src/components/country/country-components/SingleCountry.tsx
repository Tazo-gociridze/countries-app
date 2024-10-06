import  { FC } from "react";
import { useParams } from "react-router-dom";
import { countryCharacteristics, CountryData } from "../static/countryCharacteristics";

const SingleCountry: FC = () => {
  const { id } = useParams<{ id: string }>();

  const countryInfo: CountryData | undefined = countryCharacteristics.find(
    (country) => country.id.toString() === id
  );

  if (!countryInfo) {
    return <p>Страна не найдена</p>;
  }

  return (
    <div>
      <span>{countryInfo.name}</span>
      <br />
      <span>{countryInfo.capital}</span>
      <br />
      <span>{countryInfo.population}</span>
      <br />
    </div>
  );
};

export default SingleCountry;
