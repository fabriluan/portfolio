import React from 'react';
import HeaderDesktop from '../../components/Header';
import Center from '../../components/Center';
import * as styles from './style';
import ProjectsThumb from '../../components/ProjectsThumb';
import { projects } from '../../meta/project';

export default function Projects() {
  return (
    <article className="article_section">
      <HeaderDesktop />

      <Center>
        <styles.ProjectSt className="box_section">
          <h2 className="title_section">Projetos</h2>
        </styles.ProjectSt>

        {projects.map((project) => (
          <ProjectsThumb project={project} />
        ))}

      </Center>
    </article>
  );
}
