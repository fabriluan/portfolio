import styled from 'styled-components';

export const FooterSt = styled.footer`
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.content};
  padding: 15px 5px;
  margin-top: auto;

  span{
    font-size: 14px;
    font-weight: 300;
    text-align: center;
  }

  @media screen and (max-width: 1000px){
    display: flex;
  }
`;
