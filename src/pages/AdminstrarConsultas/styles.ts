import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  //background: linear-gradient(0deg, #94e0ff 0% 35%, #312E38 35%);
  height: 100vh;
  align-items: stretch;
  position: relative;
`;

export const Content = styled.div`
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 980px;
  margin: auto;
`;

const appearFromLeft = keyframes`

  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }

`;

export const AnimationContent = styled.div`
  margin: auto;
  flex-direction: column;
  align-items: center;
  place-content: center;


  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #94e0ff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: all 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#94e0ff')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;


export const TopNavigation = styled.div`
  display: flex;
  align-self: start;
  width: 100%;



  .wrapper{
    max-width: 700px;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  a{
    color: #94e0ff;
    display: block;
    margin: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg{
      margin-right: 16px;
    }

    &:hover{
      color: ${shade(0.2, '#94e0ff')};
    }
  }
`;

export const ContainerList = styled.div`
  //background-color: #969CB2;
  margin-top: 10px;
  margin-bottom:10px;
  padding: 20px;
  border-radius:5px;
`;

export const ButtonRemove =styled.tr`
  background-color: darkred;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  margin:0px 5px 0px 5px;

  svg{
    color:#ff6d8a;
    fill: #fff;
  }

`;

export const ButtonEdit =styled.tr`
  background-color: darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  margin:0px 5px 0px 5px;


  svg{
    color:#fff;
    fill: #000;
  }

`;

export const ButtonConfirm =styled.tr`
  background-color: #44c767;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
  margin:0px 5px 0px 5px;

  svg{
    color:#fff;
    fill: #44c767;
  }
`;

export const GroupFilters = styled.div`
  display:flex;
  margin:10px;

  h3{
    justify-content:center
  }

  select{
    margin:20px;
    height:48px;
    border-radius:10px;
  }


`;


