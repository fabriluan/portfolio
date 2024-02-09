import styled from 'styled-components';

export const HeaderDesktopSt = styled.header`
    min-height: 100vh;
    
    width: 100%;
    max-width: 320px;
    padding: 20px 0;
    background-color: ${(props) => props.theme.content};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        font-size: 32px;
        color: ${(props) => props.theme.textLigth};
        margin-left: auto;
        margin-right: 10px;
        padding: 5px 10px;
    }

    img{
        width: 100%;
        border-radius: 100%;
        object-fit: cover;
        max-width: 220px;
    }

    h2{
        margin-top: 12px;
    }
`;

export const HeaderDesktopNav = styled.nav`
    width: 100%;

    ul{
      margin-top: 10px;

      li{
        width: 100%;

        ${(props) => (props.$href === '/' ? `&:nth-child(1){ background-color: ${props.theme.purple} }` : '')}

        ${(props) => (props.$href === '/projetos' ? `&:nth-child(2){ background-color: ${props.theme.purple} }` : '')}
        
        ${(props) => (props.$href === '/contato' ? `&:nth-child(3){ background-color: ${props.theme.purple} }` : '')}

        a{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          padding: 18px 30%;
          font-size: 20px;
          font-weight: 300;

          svg{
            font-size: 24px;
            
            margin-right: 16px;
          }

        }

        &:nth-child(1){ a{ svg{ margin-top: -3px; }} }

          
        }
    }
`;
