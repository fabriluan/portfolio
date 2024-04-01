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
        font-size: 28px;
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

    @media screen and (max-width: 1000px){
      display: none;
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
          font-size: 18px;
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

export const HeaderMobileSt = styled.header`
  width: 100%;
  display: none;
  background-color: ${(props) => props.theme.content};

  > .center{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1000px){
    display: flex;
  }
`;

export const HeaderMobileLogo = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 100%;
    max-width: 52px;
    border-radius: 100%;
  }

  h2{
    margin-left: 10px;
  }
`;

export const HeaderMobileButton = styled.button`
  padding: 5px;
  background-color: transparent;
  border: 0;

  svg{
    font-size: 26px;
    color: ${(props) => props.theme.textLigth};
  }
`;

export const HeaderMobileMenu = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  top: 0;
  height: 100vh;
  width: 100vw;
  padding: 10px 0;
  background-color: ${(props) => props.theme.content};

  button{
    padding: 10px;
    background-color: transparent;
    border: 0;

    svg{
      font-size: 30px;
      color: ${(props) => props.theme.textLigth};
    }
  }
`;

export const HeaderMobileNav = styled.nav`
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
      justify-content: center;
      width: 100%;
      padding: 18px;
      font-size: 18px;
      font-weight: 300;
      border-bottom: 1px solid ${(props) => props.theme.purple};

      svg{
        font-size: 24px;
        
        margin-right: 16px;
      }

    }

    &:nth-child(1){ a{ svg{ margin-top: -3px; }} }

      
    }
}
`;
