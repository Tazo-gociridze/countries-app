import { FC, useState } from "react";
import { countryCharacteristics } from "./static/countryCharacteristics";
import Wrapper from "./country-components/Wrapper";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const CountrySection: FC = () => {
  const [countryInfo, setCountryInfo] = useState([...countryCharacteristics]);

  const handleSortUp = () => {
    const sortedCountries = [...countryInfo].sort(
      (a, b) => (b.likes || 0) - (a.likes || 0) // Меняем местами a и b
    );
    setCountryInfo(sortedCountries);
  };

  const handleSortDown = () => {
      const sortedCountries = [...countryInfo].sort(
        (a, b) => (a.likes || 0) - (b.likes || 0)
      );
      setCountryInfo(sortedCountries);
  };

  return (
    <>
      <section>
        <button onClick={handleSortUp} className="sort-btn">
          sort <FaSortUp />
        </button>
        <button onClick={handleSortDown} className="sort-btn">
          sort <FaSortDown />
        </button>
        <div className="country__section">
          {countryInfo.map((obj, index) => (
            <Wrapper
              key={obj.id}
              flagType={obj.flagName}
              countryIndex={index}
              countryState={countryInfo}
              countrySetState={setCountryInfo}
              el={obj}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CountrySection;
