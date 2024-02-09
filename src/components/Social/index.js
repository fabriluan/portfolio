import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

import { FaYoutube, FaLinkedin } from 'react-icons/fa';

import * as styles from './style';

export default function Social() {
  return (
    <styles.SocialSt>
      <a href="#1" target="blank" aria-label="link"><FaYoutube size="45px" /></a>
      <a href="#1" target="blank" aria-label="link"><FaGithub /></a>
      <a href="#1" target="blank" aria-label="link"><FaLinkedin /></a>
      <a href="#1" target="blank" aria-label="link"><RiInstagramFill /></a>
    </styles.SocialSt>
  );
}
