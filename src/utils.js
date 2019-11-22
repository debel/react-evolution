import React from 'react';

import {
  BlockQuote,
  Cite,
  CodePane as SpectacleCodePane,
  Deck as SpectacleDeck,
  Heading as SpectacleHeading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./overrides.css');

const theme = createTheme(
  {
    primary: '#f0f0f0',
    secondary: 'black',
    tertiary: 'black',
    quaternary: 'black',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export const Deck = ({ children }) => (
  <SpectacleDeck
    progress="bar"
    transition={['slide']}
    transitionDuration={200}
    theme={theme}
  >
    {children}
  </SpectacleDeck>
);

export const Heading = ({ children, ...props }) => (
  <SpectacleHeading size={4} {...props}>{children}</SpectacleHeading>
);

export const CodePane = ({ src, ...props }) => (
  <SpectacleCodePane lang="jsx" theme="external" source={src} {...props} />
);

export const Marquee = ({ text }) => (
  // eslint-disable-next-line
  <marquee scrolldelay="60">{text}</marquee>
);

export const Note = ({ children }) => (
  <Text className="evo-note">{children}</Text>
);
