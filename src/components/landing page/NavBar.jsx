import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "../../Layouts/Button";

const NavBarComponent = ({elements, login = false}) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const onClickButton = () => {
    navigate('/auth/login')
  }

  return (
    <div className="fixed w-full z-20">
        <div>
            <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className=" flex flex-row items-center cursor-pointer">
                    <h1 className=" text-xl font-semibold" style={{color: 'var(--dark-blue)', background: 'transparent'}}>Elearn</h1>
                </div>
                <nav className="hidden md:flex flex-row items-center text-sm font-medium gap-8">
                    {elements.map((e, i) => (
                        <Link
                          key={i}
                          to={e.to}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className="hover:text-brightColor transition-all cursor-pointer"
                          style={{color: 'var(--dark-blue)'}}
                        >
                            {e.title}
                        </Link>
                    ))}
                    { login && <Button title="Login" color='var(--main-color)' onClick={()=> navigate('/auth/login')}/>}
                </nav>
                <div className="md:hidden flex items-center cursor-pointer">
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
              } lg:hidden flex flex-col absolute bg-black text-white left-0 top-17 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
            >
                {elements.map((e, i) => (
                    <Link 
                      key={i}
                      to={e.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:text-brightColor transition-all cursor-pointer"
                      onClick={closeMenu}
                    >
                        {e.title}
                    </Link>
                ))}
                { login && <Button title="login" color='var(--white)' onClick={onClickButton}/>}
            </div>
        </div>
    </div>
  );
};

export default NavBarComponent