import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: linear-gradient(0deg, #94e0ff 0% 35%, #312E38 35%);
  height: 100vh;
  align-items: stretch;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
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
  position: absolute;
  margin: auto;
  height: 40%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
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
  max-width: 700px;


  .wrapper{
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

