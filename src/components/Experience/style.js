import styled from 'styled-components';

export const ExperienceSt = styled.section`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: ${(props) => props.theme.content};
  box-shadow: 0px 0px 15px 0px ${(props) => props.theme.purple};
  border-radius: 0.5rem;
  padding: 8px 15px;

  svg{
    color: ${(props) => props.theme.green};
    margin-right: 10px;
  }

  img{
    width: 100%;
    max-width: 64px;
    border-radius: 100%;
  }
`;

export const GroupExperience = styled.div`
  display: flex;
  margin-left: 10px;
  padding: 0 5px;
  flex-direction: column;

  h3{
    font-size: 17px;
  }

  p{
    font-size: 15px;

    a{
      color: ${(props) => props.theme.green};
      margin-left: 3px;
      text-decoration: underline;
      font-weight: 700;
    }
  }
`;
