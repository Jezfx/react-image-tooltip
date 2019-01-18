import React, { Component } from "react";
import ReactImageTooltip from "react-image-tooltip";
import {
  GlobalStyle,
  Container,
  Block,
  Header,
  Heading,
  SubHeading,
  Divider,
  Intro,
  DummyText,
  List,
  Item,
  Button
} from "./styles";

import fart from "./fart.gif";
import yeah from "./oh-yeah.gif";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <Header>
            <Heading>React image tooltip</Heading>
            <SubHeading as="h2">Usage demo</SubHeading>
            <Divider />
            <Intro>
              Gifs make everyone smile, add some sass to your site and include
              some gifs when you{" "}
              <ReactImageTooltip image={fart}>
                <strong className="shake">hover</strong>
              </ReactImageTooltip>{" "}
              over elements.
            </Intro>
          </Header>

          <Block>
            <List>
              <Item>here</Item>
              <Item>here</Item>
              <Item>here</Item>
              <Item>here</Item>
            </List>
          </Block>

          <Block>
            <DummyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sagittis scelerisque magna, vitae luctus arcu molestie eu. Sed est
              ligula, euismod quis malesuada id, semper vulputate eros. Donec
              fermentum odio non condimentum accumsan. Nam eget ipsum enim.
              Donec tincidunt ac mauris nec iaculis. Maecenas eget nibh id
              tortor fermentum condimentum sit amet sed erat. In euismod posuere
              est id convallis. Aliquam id pulvinar dui, ut condimentum urna.
              Phasellus maximus viverra iaculis. Aenean lacinia rutrum mollis.
            </DummyText>
          </Block>
          <Block>
            <Button>Button</Button>
          </Block>
        </Container>
      </React.Fragment>
    );
  }
}
