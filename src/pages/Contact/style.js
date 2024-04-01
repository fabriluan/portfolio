import styled from 'styled-components';

export const ContactSt = styled.section`
  display: flex;
`;

export const ContactInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`;

export const ContactInfoGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  div{
    border-radius: 100%;
    background-color: ${(props) => props.theme.purple};
    opacity: 0.35;
    position: absolute;
  }
  
  .div_one{
    width: 380px;
    height: 380px;
  }

  .div_two{
    width: 320px;
    height: 320px;
  }

  img{
    width: 100%;
    max-width: 256px;
    border-radius: 100%;
    z-index: 2;
  }
`;

export const ContactForm = styled.form`
  width: 50%;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 280px;
    padding: 10px 8px;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-left: auto;
    font-size: 17px;
    font-weight: 900;
    background-color: ${(props) => props.theme.purple};
    border: none;
    color: ${(props) => props.theme.textLigth};
  }
`;

export const ContactFormInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 30px;

  span{
    font-size: 17px;
    margin-bottom: 8px;
  }

  input, textarea{
    color: ${(props) => props.theme.textLigth};
    border: 1.5px solid ${(props) => props.theme.textLigth};
    background-color: transparent;
    border-radius: 0.2rem;
    font-size: 16px;
    padding: 9px;
    outline: none;

    &::placeholder{
      color: ${(props) => props.theme.purpleLigth};
      opacity: 0.7;
    }

    &:focus{
      border: 1.5px solid ${(props) => props.theme.green};
    }
  }

  textarea{
    resize: none;
    font-family: 'Montserrat', sans-serif;
    height: 170px;
    font-size: 16px;
  }
  

`;

export const ContactSocial = styled.section`
  margin-top: 30px;
`;
