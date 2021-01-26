import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Background = styled.div`
  flex: 1;
  background-image: linear-gradient(0deg, #94e0ff 0% 35%, #312E38 35%);

  background-size: cover;
`;

export const Container = styled.div`
  background-size: auto;
  /* background-image: linear-gradient(0deg, #94e0ff 0% 35%, #312E38 35%); */
  /* background-image: linear-gradient(to bottom right, red , blue); */
  height: 100vh;
  /* align-items: stretch; */
  position: relative;
  font-size: 1.6rem;
`;

export const Content = styled.div`
  width: 100%;
  height:70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200;
  margin: 0;
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
  /* height: 40%;
  left: 35%;
  top: 30%; */

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

export const ContentMenu = styled.div`
  margin-right: auto;
  margin-left: 20px;

//   padding: 2.5rem;
//   font-size: 1.6rem;

// h1:{

// }
// p{

// }
`;

export const CardContainer = styled.div`
  // height: 300px;
  // width: 600px;
  // top: 50%;
  // left: calc(100% - 30px);
  width: 100%;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;

  // a:{
  //   color: inherit;
  // }
`;

export const Icons = styled.div`
  color:#94e0ff;
  &:hover{
    color:#fff;
  }
`;

export const Footer = styled.div`
    /* align-items: center; */
    /* position:relative; */
    background-color: #28262e;
    display: flex;
    height: 144px;
    align-self:flex-end;
    justify-content: center;
    align-items: center;

    > div {
      /* margin: 0px auto; */
      justify-content:center;
      /* align-self:center; */
      /* max-width: 1120px; */
      /* width: 100%; */

      /* svg {
        color: #94e0ff;
        height: 24px;
        width: 24px;
      }
       &:hover {
        line,polyline {
        stroke: ${shade(0.1, '#9ed3ff')};
      } */

    }
`;

export const Card = styled.div`
  /* height: 280px; */
  width: 350;
  flex: 1 0;
  flex-direction: row;
  margin-top:10px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  padding-top: 20px;
  transition: 0.4s ease-out;
  /* position: relative; */



  .circle svg {
      fill: #17141d;
      stroke-width: 2px;
      margin-right: 16px;
  }


  // h3:{
  //   color: white;
  //   font-weight: 300;
  //   position: absolute;
  //   left: 20px;
  //   top: 15px;
  //   font-size: 1.6rem;
  // }

  // div:{
  //   position: absolute;
  //   top: 100px;
  //   left: 20px;
  //   height: 5px;
  //   width: 150px;



  //   .emptybar {
  //     background-color: #2e3033;
  //     width: 100%;
  //     height: 100%;
  //   }

  //   .filledbar {
  //     position: absolute;
  //     top: 0px;
  //     z-index: 3;
  //     width: 0px;
  //     height: 100%;
  //     background: rgb(0,154,217);
  //     background: linear-gradient(90deg, #ffff 0% , #94e0ff 30% 100%);
  //     transition: 0.6s ease-out;
  //   }

  //   &:hover{
  //     transition: 0.4s ease-out;

  //   }

  // }

  `;



export const TopNavigation = styled.div`
  display: flex;
  align-self: start;
  width: 100%;
  padding-left:20px;
  padding-right:20px;
  /* max-width: 1200px; */


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

