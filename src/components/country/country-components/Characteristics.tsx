import { FC } from "react";
import { CountryCharacteristic } from "./Wrapper";

interface CountryInfoProps {
  characteristics: CountryCharacteristic[];
}

const Characteristics: FC<CountryInfoProps> = ({ characteristics }) => {
  return (
    <div className="characteristics">
      {characteristics.map((item, i) => (
        <div key={i} className="characteristic">
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Characteristics;
