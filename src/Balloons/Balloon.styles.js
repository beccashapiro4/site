import styled, { keyframes } from "styled-components";
import { random, randomColor } from "./utils";

const balloonsLeftUpKFAnimation = ({ x, y, left, hangOnTop, rotate }) => {
  // console.log({x,y, left, rotate});
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    15%{ 
      top: ${`${random(70, 80)}vh`};
      left: ${`${left - random(10, 20)}vw`};
    }
    25%{
      top: ${`${random(45, 55)}vh`};
      left: ${`${left + random(15, 20)}vw`};
    }
    45%{
      top: ${`${random(25, 40)}vh`};
      left: ${`${left - random(20, 30)}vw`};
    }
    80%{
      top: ${`${random(5, 15)}vh`};
      left: ${`${left + random(20, 30)}vw`};
    }
    100%{
      top: ${`${hangOnTop ? random(-2, 1) : random(-60, -70)}vh`};
      left: ${`${hangOnTop ? random(0, 50) : left - random(30, 50)}vw`};
    }
  }
`
};
const balloonsRightUpKFAnimation = ({ x, y, left, rotate, hangOnTop }) => {
  // console.log({x,y, left, rotate});
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    30%{ 
      top: ${`${random(60, 70)}vh`};
      left: ${`${left - random(10, 30)}vw`};
    }
    55%{
      top: ${`${random(30, 40)}vh`};
      left: ${`${left + random(5, 20)}vw`};
    }
    70%{
      top: ${`${random(10, 20)}vh`};
      left: ${`${left - random(20, 30)}vw`};
    }
    100%{
      top: ${`${hangOnTop ? random(-2, 1) : random(-60, -70)}vh`};
      left: ${`${hangOnTop ? random(0, 50) : left + random(30, 50)}vw`};
    }
  }
`
};

const colorMaps = {
  yellow: 'rgba(150, 150, 0, .75)',
  blue: 'rgba(0, 0, 150, .75)',
  purple: 'rgba(77, 0, 150, 0.75)',
  green: 'rgba(0, 150, 0, .75)',
  orange: 'rgba(150, 47, 0, 0.75)',
  red: 'rgba(150, 0, 0, .75)',
}

export const StyledBalloon = styled.div`
  // top: 100px;
  filter: hue-rotate(${props => props.hue}deg);
  display: ${props => props.show ? 'block' : 'none'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  left: ${props => `${props.animate.left}vw`};
  transition: transform 0.5s ease;
  z-index: 10;
  animation: ${props => props.animate.left > 50 ? balloonsRightUpKFAnimation(props.animate) : balloonsLeftUpKFAnimation(props.animate)} ease-in-out ${props => props.animate.loop ? 'infinite' : '1'};
  // animation-duration: 3s;
  animation-duration: ${props => `${props.animate.duration}s`};
  animation-delay ${props => `${props.animate.delay}s`};
  animation-fill-mode: ${props => props.animate.hangOnTop ? 'forwards' : 'none'};
  transform-origin:bottom center;
  --balloonDimension: 10vmax; /* 15% of min(viewport width, height) */
  width: var(--balloonDimension);
  height: var(--balloonDimension);
  border-radius: 100% 100% 100% 100%;
  transform: rotateZ(${props => props.rotation}deg);
  text-align: center;
  position: fixed;
  .show {
    display: block;
    visibility: visible;
  }
  .bubble {
    opacity: 50%;
  }
`;

