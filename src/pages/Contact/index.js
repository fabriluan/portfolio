import React from 'react';
import HeaderDesktop from '../../components/Header';
import Center from '../../components/Center';
import Social from '../../components/Social';
import perfil from '../../assets/perfil.jpeg';
import * as styles from './style';

export default function Contact() {
  return (
    <article className="article_section">
      <HeaderDesktop />

      <Center>
        <styles.ContactSt className="box_section">
          <styles.ContactInfo>
            <h2 className="title_section">Entre em contato</h2>

            <styles.ContactInfoGroup>
              <div className="div_one" />
              <div className="div_two" />
              <img src={perfil} alt="perfil" />
            </styles.ContactInfoGroup>
          </styles.ContactInfo>

          <styles.ContactForm>
            <h2 className="title_section">Mande sua mensagem</h2>

            <styles.ContactFormInput>
              <span>Qual seu nome?</span>
              <input type="text" name="name" />
            </styles.ContactFormInput>

            <styles.ContactFormInput>
              <span>Qual seu telefone?</span>
              <input type="text" name="name" />
            </styles.ContactFormInput>

            <styles.ContactFormInput>
              <span>Qual seu melhor email?</span>
              <input type="text" name="name" />
            </styles.ContactFormInput>

            <styles.ContactFormInput>
              <span>Deixe uma pergunta</span>
              <textarea rows="" cols="" />
            </styles.ContactFormInput>

            <button type="submit">Enviar</button>

          </styles.ContactForm>
        </styles.ContactSt>

        <styles.ContactSocial className="box_section">
          <Social />
        </styles.ContactSocial>
      </Center>
    </article>
  );
}
