import React from 'react';
import { PropTypes } from 'prop-types';
import {
  FaHtml5, FaWordpress, FaReact, FaShopify, FaCss3Alt,
} from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaElementor, FaNodeJs } from 'react-icons/fa6';
import { SiStyledcomponents } from 'react-icons/si';
import { Link } from 'react-router-dom';
import * as styles from './style';

export default function ProjectsThumb({ project }) {
  const {
    id, perfil, name, description, tec,
  } = project;

  const returnCase = (technology) => {
    switch (technology) {
      case 'html':
        return (
          <div>
            <FaHtml5 />
            <span>{technology}</span>
          </div>
        );
      case 'css':
        return (
          <div>
            <FaCss3Alt />
            <span>{technology}</span>
          </div>
        );
      case 'js':
        return (
          <div>
            <IoLogoJavascript />
            <span>{technology}</span>
          </div>
        );

      case 'jquery':
        return (
          <div>
            <DiJqueryLogo />
            <span>{technology}</span>
          </div>
        );

      case 'shopify':
        return (
          <div>
            <FaShopify />
            <span>{technology}</span>
          </div>
        );

      case 'reactJs':
        return (
          <div>
            <FaReact />
            <span>{technology}</span>
          </div>
        );

      case 'wordpress':
        return (
          <div>
            <FaWordpress />
            <span>{technology}</span>
          </div>
        );

      case 'styled':
        return (
          <div>
            <SiStyledcomponents />
            <span>{technology}</span>
          </div>
        );

      case 'node':
        return (
          <div>
            <FaNodeJs />
            <span>{technology}</span>
          </div>
        );

      case 'elementor':
        return (
          <div>
            <FaElementor />
            <span>{technology}</span>
          </div>
        );

      default:
        return (
          <div />
        );
    }
  };

  return (
    <Link to={`/projetos/${id}`}>
      <styles.ProjectsThumbSt className="box_section">
        <img src={perfil} alt="" />

        <styles.ThumbGroup>
          <h3 className="title_section">{name}</h3>
          <p>{description}</p>

          <h3 className="title_section">Tecnologias</h3>
          <styles.ThumbGroupTec>
            { tec.map((technology) => (
              returnCase(technology)
            ))}
          </styles.ThumbGroupTec>

        </styles.ThumbGroup>
      </styles.ProjectsThumbSt>
    </Link>
  );
}

ProjectsThumb.propTypes = {
  project: PropTypes.node.isRequired,
};
