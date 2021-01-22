import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  > header {
    align-items: center;
    background-color: #28262e;
    display: flex;
    height: 144px;

    > div {
      margin: 0px auto;
      max-width: 1120px;
      width: 100%;

      svg {
        color: #94e0ff;
        height: 24px;
        width: 24px;
      }
       &:hover {
        line,polyline {
        stroke: ${shade(0.1, '#9ed3ff')};
      }
      
    }
  }
`;

export const Info = styled.div`
    font-size: 20px;
    color: #faf8ff;
    align-items: center;
    background-color: #28262e;
     &:hover {
      background-color: ${shade(0.2, '#9ed3ff')};
    }

`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -150px auto 0px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin: 60px 0px;
    text-align: center;
    width: 340px;
    background-color: #f8f9ff;
    padding-top: 20px;
    border-radius: 15px;
    border-style: groove;
    padding-bottom: 10px;

    h1 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 24px;
      text-align: center;
      color: #312e38;
    }
    
    h2 {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 10px;
      text-align: left;
      padding-left: 28px;
      color: #312e38;
    }


    a {
      color: #312e38;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  align-self: center;
  margin-bottom: 32px;
  position: relative;

  img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
    border: 1px;
    border-style: groove;
    border-color: darkgray;
    border-block: inherit;
  }

  label {
    align-items: center;
    background-color: #ff9000;
    border: 0px;
    border-radius: 50%;
    bottom: 0px;
    cursor: pointer;
    display: flex;
    height: 48px;
    justify-content: center;
    position: absolute;
    right: 0px;
    transition: background-color 0.2s;
    width: 48px;

    input {
      display: none;
    }

    svg {
      color: #312e38;
      height: 20px;
      width: 20px;
    }
  }
`;
