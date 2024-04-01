import styled from 'styled-components';

export const SocialSt = styled.div`
  display: flex;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
    margin-right: 13px;
    font-size: 35px;
  }

  @media screen and (max-width: 1000px){
    a{
      font-size: 30px;
    }
  }
`;
