import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html,body,#root{
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.background};
      font-family: 'Montserrat', sans-serif;
      color: ${(props) => props.theme.textLigth};
    }

    a{
      text-decoration: none;
      color: inherit;
    }

    button{
      cursor: pointer;
    }

    .title_section{
      font-size: 26px;
      letter-spacing: 0.1rem;
      font-family: 'Lalezar', system-ui;
      text-transform: uppercase;
      color: ${(props) => props.theme.textLigth};
    }

    .article_section{
      display: flex;
      flex-direction: row;
    }

    .box_section{
      background-color: ${(props) => props.theme.content};
      padding: 20px 30px;
    }
`;
