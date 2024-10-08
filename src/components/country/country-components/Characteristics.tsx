// import { FC, useState } from "react";
// import { CountryData, countryCharacteristics } from "../static/countryCharacteristics";
// import { AiOutlineLike } from "react-icons/ai";

// interface CountryInfoProps {
//   el: CountryData;
//   index: number;
//   countryState: CountryData[];
//   countrySetState: React.Dispatch<React.SetStateAction<CountryData[]>>;
// }

// const Characteristics: FC<CountryInfoProps> = ({ el, index, countryState, countrySetState }) => {
//   function counter(e: React.MouseEvent) {
//      e.stopPropagation()
//   }

//   return (
//     <div className="characteristics">
//       <div className="characteristic">
//         <span>{el.name}</span><br />
//         <span>{el.capital}</span><br />
//         <span>{el.population}</span><br />
//         <div onClick={counter} className="like-icon">
//           <span>{countryState}</span>
//           <AiOutlineLike />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Characteristics;


import { FC, useState } from "react";
import { CountryData } from "../static/countryCharacteristics";
import { AiOutlineLike } from "react-icons/ai";

interface CountryInfoProps {
  el: CountryData;
  index: number;
  countryState: CountryData[];
  countrySetState: React.Dispatch<React.SetStateAction<CountryData[]>>;
}

const Characteristics: FC<CountryInfoProps> = ({
  el,
  index,
  countryState,
  countrySetState,
}) => {
  const [count, setCount] = useState(el.likes || 0); 

  function counter(e: React.MouseEvent) {
    e.stopPropagation();
    setCount((prevCount) => prevCount + 1);
    countrySetState((prevCountries) => {
      const updatedCountries = [...prevCountries];
      updatedCountries[index].likes = (updatedCountries[index].likes || 0) + 1; 
      console.log(countryState)
      return updatedCountries;
    });
  }

  return (
    <div className="characteristics">
      <div className="characteristic">
        <span>{el.name}</span>
        <br />
        <span>{el.capital}</span>
        <br />
        <span>{el.population}</span>
        <br />
        <div onClick={counter} className="like-icon">
          <span>{count}</span>
          <AiOutlineLike />
        </div>
      </div>
    </div>
  );
};

export default Characteristics;