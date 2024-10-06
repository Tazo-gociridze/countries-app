import { FC } from "react"

const Img: FC<{flagType:string}> = ({flagType}) => {
  return (
    <div className={"flag-img" + ' ' + flagType}></div>
  )
};

export default Img;
