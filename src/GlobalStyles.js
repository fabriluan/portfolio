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
      font-size: 24px;
      letter-spacing: 0.1rem;
      font-family: 'Lalezar', system-ui;
      text-transform: uppercase;
      color: ${(props) => props.theme.textLigth};

      @media screen and (max-width: 1000px){
        font-size: 20px;
      }
    }

    .article_section{
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 1000px){
        flex-direction: column;
      }
    }

    .box_section{
      background-color: ${(props) => props.theme.content};
      padding: 20px 30px;
    }
`;
