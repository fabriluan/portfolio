import styled from 'styled-components';

export const HomeSt = styled.section`
  display: flex;
  flex-direction: column;
`;

export const GroupHome = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;

  div{
    width: calc(100% - 230px);

    p{
      font-size: 18px;
    }
  }

  img{
    width: 30%;
    max-width: 190px;
    border-radius: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px){
    flex-direction: column;

    div{
      width: 100%;

      p{
        font-size: 16px;
        margin-bottom: 5px;
      }
    }

    img{
      max-width: 80px;
      display: none;
    }
  }
`;

export const SkillsSt = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const GroupSkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const InfoSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg{
    font-size: 45px;
  }

  h6{
    margin-top: 5px;
    font-size: 15px;
    font-weight: 300;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1000px){
    margin-bottom: 15px;
  }
`;

export const Experience = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const ExperienceYear = styled.div`
  padding: 6px 0;
  text-align: center;
  font-weight: 800;
  max-width: 80px;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.purple};
  margin-top: 15px;
`;
