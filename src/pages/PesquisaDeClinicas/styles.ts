import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromTop = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   animation: ${appearFromTop} 1s;

   form{
    margin: 80px 0;
    width: 340px;
    min-width:340px;
    text-align: center;

    h1{
      margin-bottom: 24px;
    }

      a{
        color: #F4EDE8;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#F4EDE8')};
        }
      }
  }

  > a{
        color: #94e0ff;
        display: block;
        margin-top: 24px;
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
