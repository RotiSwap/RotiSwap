import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');

* {
    font-family: roboto;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  /* Get the bourbon mixin from http://bourbon.io */
  /* Reset */

  .flip-clock-wrapper * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-clock-wrapper a {
    cursor: pointer;
    text-decoration: none;
    color: #ccc;
  }
  
  .flip-clock-wrapper a:hover {
    color: #fff;
  }
  
  .flip-clock-wrapper ul {
    list-style: none;
  }
  
  .flip-clock-wrapper.clearfix:before,
  .flip-clock-wrapper.clearfix:after {
    content: " ";
    display: table;
  }
  
  .flip-clock-wrapper.clearfix:after {
    clear: both;
  }
  
  .flip-clock-wrapper.clearfix {
    *zoom: 1;
  }
  
  /* Main */
  
  .flip-clock-wrapper {
    //font: normal 11px "Helvetica Neue", Helvetica, sans-serif;
    -webkit-user-select: none;
  }
  
  .flip-clock-meridium {
    background: none !important;
    box-shadow: 0 0 0 !important;
    font-size: 36px !important;
  }
  
  .flip-clock-meridium a {
    color: #313333;
  }
  
  .flip-clock-wrapper {
    text-align: center;
    position: relative;
    width: 100%;
    margin: 1em auto 0 auto;
  }
  
  .flip-clock-wrapper:before,
  .flip-clock-wrapper:after {
    content: " ";
    /* 1 */
    display: table;
    /* 2 */
  }
  
  .flip-clock-wrapper:after {
    clear: both;
  }
  
  
  /* Skeleton */
  
  .flip-clock-wrapper ul {
    position: relative;
    float: left;
    margin: 1px;
    width: 25px;
    height: 35px;
    font-size: 50px;
    font-weight: bold;
    line-height: 87px;
    border-radius: 6px;
    background: #1F1F1F;
  }
  
  .flip-clock-wrapper ul li {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 35px;
    text-decoration: none !important;
  }
  
  .flip-clock-wrapper ul li:first-child {
    z-index: 2;
  }
  
  .flip-clock-wrapper ul li a {
    display: block;
    height: 100%;
    -webkit-perspective: 200px;
    -moz-perspective: 200px;
    perspective: 200px;
    margin: 0 !important;
    overflow: visible !important;
    cursor: default !important;
  }
  
  .flip-clock-wrapper ul li a div {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    font-size: 80px;
    overflow: hidden;
    outline: 1px solid transparent;
  }
  
  .flip-clock-wrapper ul li a div .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  
  .flip-clock-wrapper ul li a div.up {
    -webkit-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    top: 0;
  }
  
  .flip-clock-wrapper ul li a div.up:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 3px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .flip-clock-wrapper ul li a div.down {
    -webkit-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    transform-origin: 50% 0;
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  .flip-clock-wrapper ul li a div div.inn {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 200%;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: none;
    text-align: center;
    background-color: #1F1F1F;
    border-radius: 0;
    font-size: 25px;
  }
  
  .flip-clock-wrapper ul li a div.up div.inn {
    top: 0;
  }
  
  .flip-clock-wrapper ul li a div.down div.inn {
    bottom: 0;
  }
  
  
  /* PLAY */
  
  .flip-clock-wrapper ul.play li.flip-clock-before {
    z-index: 3;
  }
  
  .flip-clock-wrapper .flip {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }
  
  .flip-clock-wrapper ul.play li.flip-clock-active {
    -webkit-animation: asd 0.5s 0.5s linear both;
    -moz-animation: asd 0.5s 0.5s linear both;
    animation: asd 0.5s 0.5s linear both;
    z-index: 5;
  }
  
  .flip-clock-divider {
    float: left;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 100px;
  }
  
  .flip-clock-divider:first-child {
    width: 0;
  }
  
  .flip-clock-dot {
    display: block;
    background: rgba(255, 255, 255, 0.5);
    width: 6px;
    height: 6px;
    position: absolute;
    border-radius: 50%;
    box-shadow: none;
    left: 5px;
  }
  
  .flip-clock-divider .flip-clock-label {
    position: absolute;
    top: 3em;
    right: -45px;
    font-size: 14px;
    opacity: 0.5;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: none;
  }
  
  .flip-clock-divider.hours .flip-clock-label {
    right: -50px;
    font-size: 14px;
    opacity: 0.5;
    font-weight: 100;
  }
  
  .flip-clock-divider.minutes .flip-clock-label {
    right: -55px;
    font-size: 14px;
    opacity: 0.5;
    font-weight: 100;
  }
  
  .flip-clock-divider.seconds .flip-clock-label {
    right: -55px;
    font-size: 14px;
    opacity: 0.5;
    font-weight: 100;
  }
  
  .flip-clock-dot.top {
    top: 10px;
  }
  
  .flip-clock-dot.bottom {
    bottom: 70px;
  }
  
  @-webkit-keyframes asd {
    0% {
      z-index: 2;
    }
    20% {
      z-index: 4;
    }
    100% {
      z-index: 4;
    }
  }
  
  @-moz-keyframes asd {
    0% {
      z-index: 2;
    }
    20% {
      z-index: 4;
    }
    100% {
      z-index: 4;
    }
  }
  
  @-o-keyframes asd {
    0% {
      z-index: 2;
    }
    20% {
      z-index: 4;
    }
    100% {
      z-index: 4;
    }
  }
  
  @keyframes asd {
    0% {
      z-index: 2;
    }
    20% {
      z-index: 4;
    }
    100% {
      z-index: 4;
    }
  }
  
  .flip-clock-wrapper ul.play li.flip-clock-active .down {
    z-index: 2;
    -webkit-animation: turn 0.5s 0.5s linear both;
    -moz-animation: turn 0.5s 0.5s linear both;
    animation: turn 0.5s 0.5s linear both;
  }
  
  @-webkit-keyframes turn {
    0% {
      -webkit-transform: rotateX(90deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
    }
  }
  
  @-moz-keyframes turn {
    0% {
      -moz-transform: rotateX(90deg);
    }
    100% {
      -moz-transform: rotateX(0deg);
    }
  }
  
  @-o-keyframes turn {
    0% {
      -o-transform: rotateX(90deg);
    }
    100% {
      -o-transform: rotateX(0deg);
    }
  }
  
  @keyframes turn {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  
  .flip-clock-wrapper ul.play li.flip-clock-before .up {
    z-index: 2;
    -webkit-animation: turn2 0.5s linear both;
    -moz-animation: turn2 0.5s linear both;
    animation: turn2 0.5s linear both;
  }
  
  @-webkit-keyframes turn2 {
    0% {
      -webkit-transform: rotateX(0deg);
    }
    100% {
      -webkit-transform: rotateX(-90deg);
    }
  }
  
  @-moz-keyframes turn2 {
    0% {
      -moz-transform: rotateX(0deg);
    }
    100% {
      -moz-transform: rotateX(-90deg);
    }
  }
  
  @-o-keyframes turn2 {
    0% {
      -o-transform: rotateX(0deg);
    }
    100% {
      -o-transform: rotateX(-90deg);
    }
  }
  
  @keyframes turn2 {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-90deg);
    }
  }
  
  .flip-clock-wrapper ul li.flip-clock-active {
    z-index: 3;
  }
  
  
  /* SHADOW */
  
  .flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    -webkit-animation: show 0.5s linear both;
    -moz-animation: show 0.5s linear both;
    animation: show 0.5s linear both;
  }
  
  .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {
    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));
    background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;
    background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);
    background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;
    -webkit-animation: hide 0.5s 0.3s linear both;
    -moz-animation: hide 0.5s 0.3s linear both;
    animation: hide 0.5s 0.3s linear both;
  }
  
  
  /*DOWN*/
  
  .flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {
    background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    -webkit-animation: show 0.5s linear both;
    -moz-animation: show 0.5s linear both;
    animation: show 0.5s linear both;
  }
  
  .flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {
    background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));
    background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;
    background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);
    background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;
    -webkit-animation: hide 0.5s 0.3s linear both;
    -moz-animation: hide 0.5s 0.3s linear both;
    animation: hide 0.5s 0.2s linear both;
  }
  
  @-webkit-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-moz-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-o-keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @-moz-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @-o-keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default GlobalStyle
