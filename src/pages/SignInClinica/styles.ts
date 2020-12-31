import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;
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

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const TopNavigation = styled.div`
  position: absolute;
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
