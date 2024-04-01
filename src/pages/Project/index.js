import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaHtml5, FaWordpress, FaReact, FaShopify, FaCss3Alt,
} from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaElementor, FaNodeJs } from 'react-icons/fa6';
import { SiStyledcomponents } from 'react-icons/si';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Caroseul from 'react-elastic-carousel';
import * as styles from './style';
import HeaderDesktop from '../../components/Header';
import Center from '../../components/Center';
import { projects } from '../../meta/project';

// eslint-disable-next-line react/no-unstable-nested-components
export default function Project() {
  const { id } = useParams();

  const getProjectId = projects.filter((projeto) => projeto.id == id);

  const getProject = getProjectId;

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
    <article className="article_section">
      <HeaderDesktop />

      {getProject.length !== 0 ? (

        getProject.map((project) => (
          <styles.ProjectSt $isThumb={project.thumbnail}>

            <div className="thumb">
              <img key={project.id} src={project.perfil} alt={project.name} />
            </div>

            <Center>

              <styles.ProjectText className="box_section">
                <h2 className="title_section">{project.name}</h2>

                <p>{project.description}</p>
              </styles.ProjectText>

              <styles.ProjectTecn className="box_section">
                <h2 className="title_section">Tecnologias usadas</h2>

                <styles.ProjectTecnGroup>

                  { project.tec.map((technology) => (
                    returnCase(technology)
                  ))}

                </styles.ProjectTecnGroup>
              </styles.ProjectTecn>

              <styles.ProjectPhoto className="box_section">
                <h2 className="title_section">Fotos do projeto</h2>

                <img className="photo_center" src={project.thumbnail} alt="foto" />

                <Caroseul itemPadding={[10, 10]} itemsToShow={3}>
                  <img className="photo_mid" src={project.thumbnail} alt="foto" />
                  <img className="photo_mid" src={project.thumbnail} alt="foto" />
                  <img className="photo_mid" src={project.thumbnail} alt="foto" />
                  <img className="photo_mid" src={project.thumbnail} alt="foto" />
                  <img className="photo_mid" src={project.thumbnail} alt="foto" />

                </Caroseul>

              </styles.ProjectPhoto>

              <styles.ProjectLink className="box_section">
                <h2 className="title_section">Fotos do projeto</h2>

                <div>

                  {project.linkR && (
                  <styles.ProjectLinkRep href={project.linkR} target="blank">Repositório</styles.ProjectLinkRep>
                  )}

                  {project.linkO && (
                  <styles.ProjectLinkOnl href={project.linkO} target="blank">Ver online</styles.ProjectLinkOnl>
                  )}

                </div>
              </styles.ProjectLink>

            </Center>

          </styles.ProjectSt>
        ))
      ) : (
        <styles.ProjectNone>
          <Center>
            <div className="box_section">
              <h2 className="title_section">Projeto não encontrado</h2>
              <IoIosCloseCircleOutline />
              <Link to="/">volte para o home</Link>
            </div>
          </Center>
        </styles.ProjectNone>
      )}

    </article>
  );
}
