import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaShopify, FaDocker,
} from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import Center from '../../components/Center';
import * as styles from './style';
import HeaderDesktop from '../../components/Header';

import perfil from '../../assets/perfil.jpeg';
import Social from '../../components/Social';
import Experience from '../../components/Experience';

export default function Home() {
  const icons = [
    { icon: <FaHtml5 />, text: 'Html' },
    { icon: <FaCss3Alt />, text: 'Css' },
    { icon: <FaJs />, text: 'JS' },
    { icon: <FaReact />, text: 'React' },
    { icon: <FaGitAlt />, text: 'Git' },
    { icon: <SiStyledcomponents />, text: 'Styled' },
    { icon: <FaShopify />, text: 'Shopify' },
    { icon: <FaDocker />, text: 'Docker' },
  ];

  return (
    <article className="article_section">
      <HeaderDesktop />

      <Center>
        <styles.HomeSt className="box_section">
          <styles.GroupHome>
            <div>
              <h2 className="title_section">Sobre mim</h2>
              <p>Meu nome é Fabricio Luan Zambão Cipriano, sou um desenvolvedor web em ReactJS. Trabalho na criação de temas e configuração de lojas no Shopify. Desde 2020, em meio à pandemia, iniciei minha jornada no desenvolvimento web.</p>
              <p>Minha trajetória é guiada pela paixão pelo código e pela responsabilidade em cada projeto que assumo. Encaro os desafios como oportunidades de crescimento, sempre buscando entregar soluções eficientes e inovadoras.</p>
            </div>

            <img src={perfil} alt="foto de perfil" />
          </styles.GroupHome>

          <Social />
        </styles.HomeSt>

        <styles.SkillsSt className="box_section">
          <h2 className="title_section">Skills</h2>

          <styles.GroupSkills>
            {
              icons.map((el) => (
                <styles.InfoSkills>
                  {el.icon}
                  <h6>{el.text}</h6>
                </styles.InfoSkills>
              ))
            }

          </styles.GroupSkills>
        </styles.SkillsSt>

        <styles.Experience className="box_section">
          <h2 className="title_section">Experiência Profissional</h2>

          <styles.ExperienceYear>
            2023
          </styles.ExperienceYear>

          <Experience />
          <Experience />
        </styles.Experience>
      </Center>
    </article>
  );
}
