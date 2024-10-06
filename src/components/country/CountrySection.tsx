import { FC } from "react";
import { countryCharacteristics} from "./static/countryCharacteristics";
import Wrapper from "./country-components/Wrapper";


const CountrySection: FC = () => {
  return (
    <section className="country__section">
      <Wrapper characteristics={countryCharacteristics[0]} flagType="georgia" />
      <Wrapper characteristics={countryCharacteristics[1]} flagType="armenia" />
      <Wrapper characteristics={countryCharacteristics[2]} flagType="denmark" />
    </section>
  );
};

export default CountrySection;