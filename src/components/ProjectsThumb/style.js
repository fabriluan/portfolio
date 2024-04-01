import styled from 'styled-components';

export const ProjectsThumbSt = styled.section`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 0.5rem;
  display: flex;

  img{
    width: 100%;
    max-width: 190px;
    border-radius: 0.5rem;
  }
`;

export const ThumbGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  h3{
    font-size: 22px;
  }

  p{
    margin-bottom: 10px;
  }
`;

export const ThumbGroupTec = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 25px;

    svg{
      font-size: 30px;
    }

    span{
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;
