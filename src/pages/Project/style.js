import styled from 'styled-components';

export const ProjectSt = styled.section`
  width: 100%;

  .thumb{
    position: relative;
    width: 100%;
    height: 270px;
    background-image: url(${(props) => props.$isThumb});
    background-size: cover;
    background-position: top;
    object-fit: cover;
    object-position: top;
    box-shadow: inset 0 0 150px ${(props) => props.theme.content};

    img{
      position: absolute;
      left: calc(50% - 75px);
      bottom: -60px;
      width: 100%;
      max-width: 150px;
      height: 150px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.content};
      box-shadow: 0px 0px 20px 5px ${(props) => props.theme.purple};
      object-fit: contain;
    }
  }
`;

export const ProjectText = styled.div`
  width: 100%;
  margin-top: 50px;

  h2{
    font-size: 28px;
  }

  p{
    margin-top: 5px;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const ProjectTecn = styled.div`
  margin-top: 30px;
  
  h2{
    font-size: 28px;
  }
`;

export const ProjectTecnGroup = styled.div`
  width: 100%;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 25px;

    svg{
      font-size: 50px;
    }

    span{
      font-size: 18px;
      text-transform: uppercase;
    }
  }
`;

export const ProjectPhoto = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    width: 100%;
    font-size: 28px;
  }

  .photo_center{
    width: 100%;
    max-width: 650px;
    margin-bottom: 20px;
  }
  
  .photo_mid{
    width: 100%;
    max-width: 250px;
    cursor: pointer;
  }
`;

export const ProjectLink = styled.section`
  width: 100%;
  margin-top: 30px;

  div{
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 10px;

    a{
      width: 100%;
      max-width: 300px;
      padding: 10px 0;
      border-radius: 0.5rem;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export const ProjectLinkRep = styled.a`
  background-color: ${(props) => props.theme.purple};
`;

export const ProjectLinkOnl = styled.a`
  background-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.textDark};
  margin-left: 20px;
`;

export const ProjectNone = styled.section`
  width: 100%;

  > div > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  svg{
    font-size: 70px;
    margin-top: 10px;
  }

  a{
    margin-top: 15px;
    text-decoration: underline;

    &:hover{
      color: ${(props) => props.theme.purple};
    }
  }
`;
