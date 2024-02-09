import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { MdChatBubble } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import perfil from '../../assets/perfil.jpeg';
import * as styles from './style';

export default function HeaderDesktop() {
  const links = [
    { icon: <AiFillHome />, link: '/', text: 'Sobre' },
    { icon: <FaClipboardList />, link: '/projetos', text: 'Projetos' },
    { icon: <MdChatBubble />, link: '/contato', text: 'Contato' },
  ];

  const location = useLocation();

  const currentPath = location.pathname;

  return (
    <styles.HeaderDesktopSt>
      <button type="button" aria-label="button">
        <FaBarsStaggered />
      </button>

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
  );
}
