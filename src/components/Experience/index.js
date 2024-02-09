import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/perfil.jpeg';

import * as styles from './style';

export default function Experience() {
  return (
    <styles.ExperienceSt>
      <FaArrowRight />

      <img src={img} alt="projeto" />

      <styles.GroupExperience>
        <h3>Projetos 01</h3>
        <p>
          O projeto foi criado apartir de algumas coisas, foi criado apartir de algumas coisas. Foi criado apartir de algumas coisas, foi criado apartir de
          <b>Ver mais</b>
        </p>
      </styles.GroupExperience>
    </styles.ExperienceSt>
  );
}
