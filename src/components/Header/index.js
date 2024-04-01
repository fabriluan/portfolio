import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { FaClipboardList } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { MdChatBubble } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import perfil from '../../assets/perfil.jpeg';
import Center from '../Center';
import * as styles from './style';

export default function HeaderDesktop() {
  const [show, setShow] = useState(false);

  const links = [
    { icon: <AiFillHome />, link: '/', text: 'Sobre' },
    { icon: <FaClipboardList />, link: '/projetos', text: 'Projetos' },
    { icon: <MdChatBubble />, link: '/contato', text: 'Contato' },
  ];

  const location = useLocation();

  const currentPath = location.pathname;

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <styles.HeaderDesktopSt>

        <img src={perfil} alt="Foto de perfil" />

        <h2 className="title_section">Fabricio L Z Cipriano</h2>

        <styles.HeaderDesktopNav $href={currentPath}>
          <ul>
            {
            links.map((el) => (
              <li>
                <Link to={el.link}>
                  {' '}
                  {el.icon}
                  {' '}
                  {el.text}
                </Link>
              </li>
            ))
          }
          </ul>
        </styles.HeaderDesktopNav>
      </styles.HeaderDesktopSt>

      <styles.HeaderMobileSt>
        <Center>
          <styles.HeaderMobileLogo>
            <img src={perfil} alt="Foto de perfil" />
            <h2 className="title_section">FLZC</h2>
          </styles.HeaderMobileLogo>

          <styles.HeaderMobileButton onClick={handleShow}>
            <FaBars />
          </styles.HeaderMobileButton>
        </Center>

        {show && (
          <styles.HeaderMobileMenu>
            <button type="button" aria-label="button" onClick={handleShow}>
              <IoClose />
            </button>

            <styles.HeaderMobileNav $href={currentPath}>
              <ul>
                {
                  links.map((el) => (
                    <li>
                      <Link to={el.link} onClick={handleShow}>
                        {el.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </styles.HeaderMobileNav>

          </styles.HeaderMobileMenu>
        )}
      </styles.HeaderMobileSt>
    </>
  );
}
