import { FC, useState } from "react"
import { Link } from "react-router-dom";

const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Country", path: "/country" },
    { name: "Contact", path: "/contact" },
  ];

const Nav: FC = () => {

  const [active, useActive] = useState(0)
    return(
        <div className="navbar">
            {navs.map((item, index) => (
              <Link
              onClick={() => useActive(index)}
                to={item.path}
                className={active === index ? 'active-color' : ''}
                key={index}
              >
                {item.name}
              </Link>
            ))}
        </div>
    )
}

export default Nav