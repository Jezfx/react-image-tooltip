import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700|Montserrat:400,700');
@import url('https://necolas.github.io/normalize.css/latest/normalize.css');

// Reset
  html {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
  }
  img {
    max-width: 100%;
      height: auto;
  }
  figure {
      margin: 0;
      padding: 10px;
  }
  figure a {
      display: block;
  }
  mark {
      padding: 0 5px;
      background-color: #dddddd;
  }

  ::selection{
    background: #00eb7f;
    color: #000;
  }
  ::-moz-selection{
    background: #00eb7f;
    color: #000;
  }
  ::-webkit-selection{
    background: #00eb7f;
    color: #000;
  }

  // Styles

  body {
    background-color: #f3f3f3;
    font-family: 'Inconsolata', monospace;
    color: #252525;
    font-size: 100%;
    line-height: 1.5;
  }

  .shake {
    display: inline-block;
    animation: shake .5s ease-in 1s reverse both;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const Container = styled.section`
  max-width: 960px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 600px) {
    padding-bottom: 5em;
  }
`;

export const Header = styled.div`
  padding: 10% 0;

  @media (min-width: 600px) {
    text-align: center;
    margin-bottom: 8em;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.5em;
  line-height: 1.2;
  margin: 0;
  color: #00eb7f;

  @media (min-width: 600px) {
    font-size: 4.5em;
  }
`;

export const Block = styled.article`
  margin-bottom: 3em;
`;

export const SubHeading = styled(Heading)`
  color: #1c1c1c;
`;

export const Divider = styled.hr`
  display: inline-block;
  background-color: #00eb7f;
  border: none;
  height: 4px;
  width: 40px;
  margin: 2em 0;
`;

export const Intro = styled.p`
  font-size: 1em;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 1.25em;
    padding: 0 5em;
  }
`;

export const Code = styled.span`
  line-height: 22px;
  color: #c7254e;
  background: #f9f2f4;
  border-radius: 4;
`;

export const DummyText = styled.p``;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.li`
  list-style: none;
  font-weight: bold;
  font-size: 1.3em;
`;

export const Button = styled.button`
  background: #00eb7f;
  color: #fff;
  padding: 0.5em 2em;
  font-size: 1.5em;
  border: none;
  border-radius: 4px;
`;
