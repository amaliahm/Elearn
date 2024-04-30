import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "../../Layouts/Button";

const NavBarComponent = ({elements, login = false, home = false, element = 0}) => {
  const [menu, setMenu] = useState(false);
  const [link, setLink] = useState(element)
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate()

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = (i, to) => {
    setMenu(false);
    home ? navigate(to) : setLink(i)
  };

  const onClickButton = () => {
    navigate('/auth/login')
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarStyle = {
    backgroundColor: scrollPosition > 120 ? 'white' : 'transparent',
    transition: 'background-color 0.3s ease-in-out'
  };

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.div-to-be-scrolled');
    if (window.scrollY > 120) {
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.add('scrolled');
    }
  });

  return (
    <div className="fixed w-full z-20">
        <div>
            <div className="flex flex-row justify-between p-3 md:px-32 px-5 " style={navBarStyle}>
                <div className=" flex flex-row items-center cursor-pointer">
                    <h1 className="text-3xl font-semibold" style={{color: scrollPosition > 120 ? 'var(--main-color)' : 'white', background: 'transparent'}}>
                      ELEARN
                      <span className="text-base ml-1">ESI-SBA</span>
                    </h1>
                </div>
                <div className="hidden md:flex flex-row items-center font-semibold text-sm font-medium gap-8 div-to-be-scrolled scrolled">
                    {elements.map((e, i) => (
                        <Link
                          key={i}
                          to={e.to}
                          data-text={e.title}
                          spy={true}
                          smooth={true}
                          duration={500}
                          className={`hover:text-brightColor transition-all cursor-pointer no-underline element-link ${link === i ? 'active-link' : ''}`}
                          style={{color: scrollPosition > 120 ? 'var(--color-black)' : 'white'}}
                          onClick={() => home ? navigate(e.to) : setLink(i)}
                        >
                            {e.title}
                        </Link>
                    ))}
                    { login && scrollPosition > 500 && <Button title="Login" color={scrollPosition > 120 ? 'var(--main-color)' : 'white'} onClick={()=> navigate('/auth/login')}/>}
                </div>
                <div className="md:hidden flex items-center cursor-pointer" style={{color: scrollPosition > 120 ? 'var(--main-color)' : 'white'}}>
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
                      to={e.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      data-text={e.title}
                      className={`hover:text-brightColor transition-all cursor-pointer no-underline element-link w-fit ${link === i ? 'active-link' : ''} `}
                      onClick={() => closeMenu(i, e.to)}
                    >
                        {e.title}
                    </Link>
                ))}
                { login && scrollPosition > 500 && <Button title="login" color='var(--main-color)' onClick={onClickButton}/>}
            </div>
        </div>
    </div>
  );
};

export default NavBarComponent