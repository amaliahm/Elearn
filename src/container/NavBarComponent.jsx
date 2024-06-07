import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const NavBarComponent = ({elements, element = 0, user = {}}) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = (i, to) => {
    setMenu(false);
    navigate(to, { state: user })
  };



  return (
    <div className="fixed w-full z-20">
        <div>
            <div className="flex flex-row justify-between p-3 md:px-32 px-5 " style={{ backgroundColor: 'white', }}>
                <div className=" flex flex-row items-center cursor-pointer">
                    <h1 className="text-3xl font-semibold" style={{color: 'var(--main-color)', background: 'transparent'}}>
                      ELEARN
                      <span className="text-base ml-1">ESI-SBA</span>
                    </h1>
                </div>
                <div className="hidden md:flex flex-row items-center font-semibold text-sm font-medium gap-8">
                    {elements.map((e, i) => (
                        <Link
                          key={i}
                          spy={true}
                          smooth={true}
                          duration={500}
                          data-text={e.title}
                          className={`hover:text-brightColor transition-all cursor-pointer no-underline element-link ${element === i ? 'active-link' : ''}`}
                          onClick={() => navigate(e.to, { state: user })}
                        >
                            {e.title}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden flex items-center cursor-pointer" style={{color: 'var(--main-color)'}}>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>
            <div
              className={` ${
                menu ? "translate-x-0" : "-translate-x-full"
              } lg:hidden flex flex-col items-center absolute bg-white left-0 top-17 text-sm font-semibold text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
            >
                {elements.map((e, i) => (
                    <Link 
                      key={i}
                      spy={true}
                      smooth={true}
                      duration={500}
                      data-text={e.title}
                      className={`hover:text-brightColor transition-all cursor-pointer no-underline element-link w-fit ${element === i ? 'active-link' : ''}`}
                      onClick={() => closeMenu(i, e.to)}
                    >
                        {e.title}
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default NavBarComponent