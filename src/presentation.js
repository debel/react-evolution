import React from 'react';

import {
  BlockQuote,
  Cite,
  Code,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import {
  CodePane,
  Deck,
  Heading,
  Marquee,
} from './utils';

import {
  imperativeDOM,
  reactDOM,
  hooks_vs_hocs,
  hooks_vs_render_props,
  method_side_effects,
  hook_side_effects,
  old_lifecycle_methods,
  searchBox_class_string_ref,
  old_mixins,
  more_return_types,
  errorBoundry_example1,
  seen_classState,
  seen_hocState,
  seen_hookState,
  theme_legacyContext,
  theme_renderPropsContext,
  theme_hookContext
} from './snippets';

export default () => (
  <Deck>
    <Slide id="title">
      <Image src="/images/evolution.png" />
      <Heading size={1} fit lineHeight={1}>
        The evolution of React APIs
      </Heading>
      <Text textAlign="right">
        &lt;React.Not.A.Conf /&gt; <br/>
        Mihail Mikov <br/>
        @debelbot <br/>
      </Text>
    </Slide>

    <Slide id="about-me">
      <Image src="images/me.jpg" />
      <Heading size={4} style={{ 'padding-bottom': '0px', 'margin-bottom': '0px' }}>
        Hi, I'm Misho
      </Heading>
      <List style={{ 'padding-top': '0px', 'margin-top': '0px' }}>
        <ListItem>Senior full-stack engineer at Skyscanner</ListItem>
        <ListItem>Rick and Morty fan, Board Game Geek, Juggler</ListItem>
      </List>
    </Slide>

    <Slide id="about-skyscanner">
      <Image alt="skyscanner" src="images/skyscanner.png" />
      <List>
        <ListItem>Global travel engine with 100M users</ListItem>
        <ListItem>500+ engineers in 10 offices</ListItem>
        <ListItem>a strong dev culture</ListItem>
      </List>
    </Slide>

    <Slide id="lets-get-started">
      <Image src="images/NotAConf-logo.png" />
      <Text>Let's get this</Text>
      <Heading>&lt;React.Not.A.Conf /&gt;</Heading>
      <Text>started!</Text>
    </Slide>

    <Slide id="html">
      <Image src="images/netscape-1.png" />
      <Heading size={4}>In the beginning</Heading>
      <Text>There was HTML</Text>
      <Text>And HTML was declarative</Text>
      <Text>And it was good*</Text>
      <Marquee text="Your experience may vary, BUT the marquee tag still works so... lol?! wtf? ftw!" />
    </Slide>

    <Slide id="js">
      <Image src="images/javascript-the-good-and-bad-parts.jpg" />
      <Heading size={4}>Then there was JavaScript</Heading>
      <Text>And JavaScript had functions and closures</Text>
      <Text>And it was good*</Text>
      <Marquee text="Your experience may vary, BUT it's the most popular language in the world and we are using it everyday so... lol?! wtf? ftw!" />
    </Slide>

    <Slide id="dom">
      <Image src="images/dom-1.jpg" />
      <Heading fit>But there was also the DOM</Heading>
      <Text>And the DOM was imperative</Text>
      <Text>And the DOM was bad</Text>
    </Slide>

    <Slide id="dom-example">
      <CodePane lang="jsx" theme="external" source={imperativeDOM} />
    </Slide>

    <Slide id="react">
      <Image width="20%" src="images/love-react-2.png" />
      <Heading>But then came React</Heading>
      <Text>And React was declarative</Text>
      <Text>And everything has been perfect ever since*</Text>
      <Marquee text="Your experience may vary, BUT you are at a React Conf so... lol?! wtf? ftw!" />
    </Slide>

    <Slide id="react-example">
      <CodePane src={reactDOM} />
    </Slide>

    <Slide id="evolution">
      <Heading>Evolution</Heading>
      <List>
        <ListItem>Small change over time</ListItem>
        <ListItem>Emergent non-directed change</ListItem>
        <ListItem>Progress through error</ListItem>
        <ListItem>Survival of the fittest</ListItem>
      </List>
    </Slide>

    {/*
    <Slide id="evolution-vs-randomness">
      <Heading>evolution != randomness</Heading>
    </Slide>

    <Slide id="evolution-vs-progress">
      <Heading>evolution != progress</Heading>
    </Slide>

    <Slide id="evolution-vs-design">
     <Heading>evolution != design</Heading>
    </Slide>
    */}

    <Slide id="design">
      <Heading>Design</Heading>
      <List>
        <ListItem>Solving a specific problem</ListItem>
        <ListItem>Deliberate directed change</ListItem>
        <ListItem>Progress through learning</ListItem>
        <ListItem>Elegance in the face of complexity</ListItem>
      </List>
    </Slide>

    <Slide id="clarity">
      <Heading>Design is about clarity</Heading>
    </Slide>

    <Slide id="react-clarity">
      <Heading>React is designed for clarity</Heading>
      <List>
        <ListItem>Declarative UIs</ListItem>
        <ListItem>Explicit encapsulation</ListItem>
        <ListItem>Explicit side-effects</ListItem>
        <ListItem>Explicit state management</ListItem>
        <ListItem>Explicit access to the DOM</ListItem>
      </List>
    </Slide>

    <Slide id="stability">
      <Heading>Evolution is about stability</Heading>
    </Slide>

    <Slide id="react-stability">
      <Heading>React is designed for stability</Heading>
      <List>
        <ListItem>Reproducible rendering</ListItem>
        <ListItem>Unidirectional data-flow</ListItem>
        <ListItem>Rich development toolset</ListItem>
        <ListItem>Backwards compatible APIs</ListItem>
        <ListItem>Long-term roadmap</ListItem>
      </List>
    </Slide>

    <Slide id="depreciation">
      <Heading>Some features have been deprecated</Heading>
      <Text textSize="smaller" style={{ fontStyle: 'italic' }}>(But nothing is ever really gone)</Text>
    </Slide>

    <Slide id="deprecated-lifecycle-methods">
      <Heading>Deprecated: lifecycle methods</Heading>
      <CodePane src={old_lifecycle_methods}/>
    </Slide>

    <Slide id="deprecated-string-refs">
      <Heading>Deprecated: string refs</Heading>
      <CodePane src={searchBox_class_string_ref} />
    </Slide>

    <Slide id="deprecated-mixins">
      <Heading>Deprecated mixins</Heading>
      <CodePane src={old_mixins} />
    </Slide>

    <Slide id="new-features">
      <Heading>So many new features</Heading>
      <Text>But old project can (usually) upgrade with minimal effort</Text>
    </Slide>

    <Slide id="modularity">
      <Heading>Single responsibility</Heading>
      <Text>React went from a mono package to a number of
      smaller more focused packages</Text>
    </Slide>

    <Slide id="elements">
      <Heading>Small improvements</Heading>
      <CodePane src={more_return_types} />
    </Slide>

    <Slide id="types">
      <Heading>Many ways to make React typesafe</Heading>
      <List>
        <ListItem>Prop types</ListItem>
        <ListItem>Flow</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>ReasonML</ListItem>
      </List>
    </Slide>

    <Slide id="error-boundries">
      <Heading>Error boundries</Heading>
      <CodePane src={errorBoundry_example1} />
    </Slide>

    <Slide id="portals">
      portals
    </Slide>

    <Slide id="enter-hooks">
      <Image src="images/we-want-hooks.jpg" />
    </Slide>

    <Slide id="enter-hooks-1">
      <Image src="images/hooks-only-pattern.jpg" />
    </Slide>

    <Slide id="classical-effects">
      <Heading>Classical side-effects</Heading>
      <CodePane src={method_side_effects} />
    </Slide>

    <Slide id="hook-effects">
      <Heading>Side-effects with hooks</Heading>
      <CodePane src={hook_side_effects} />
    </Slide>

    <Slide id="punctuated-equilibrium">
      <Heading>Punctuated Equilibrium</Heading>
      <Text>Evolution doesn't happen uniformly and gradually</Text>
      <Text>Specific events have larger evolutionary significance</Text>
    </Slide>

    <Slide id="patterns">
      <Heading>Patterns are just tools</Heading>
      <List>
        <ListItem>Higher-order components</ListItem>
        <ListItem>Render props</ListItem>
        <ListItem>Hooks</ListItem>
      </List>
    </Slide>

    <Slide id="classical-state">
      <Heading>Classical state</Heading>
      <CodePane src={seen_classState} />
    </Slide>

    <Slide id="hoc-state">
      <Heading>HOC State</Heading>
      <CodePane src={seen_hocState} />
    </Slide>

    <Slide id="hooks-state">
      <Heading>Hooks state</Heading>
      <CodePane src={seen_hookState} />
    </Slide>

    <Slide id="classical-context">
      <Heading>Deprecated context</Heading>
      <CodePane src={theme_legacyContext} />
    </Slide>

    <Slide id="render-props-context">
      <Heading>Render-prop context</Heading>
      <CodePane src={theme_renderPropsContext} />
    </Slide>

    <Slide id="hooks-context">
      <Heading>Hooks context</Heading>
      <CodePane src={theme_hookContext} />
    </Slide>

    <Slide id="the-power-of-hooks">
      <Heading>The power of hooks</Heading>
      <List>
        <ListItem>Reduce unnecessary component nesting</ListItem>
        <ListItem>Improve logic sharing and code reuse</ListItem>
        <ListItem>Improve performance and readability</ListItem>
      </List>
    </Slide>

    <Slide id="hooks-vs-hoc">
      <Heading>Hooks vs higer-order components</Heading>
      <Text>HOCs can dictate rendering</Text>
      <CodePane src={hooks_vs_hocs} />
    </Slide>

    <Slide id="hooks-vs-render-props">
      <Heading>Hooks vs render props</Heading>
      <CodePane src={hooks_vs_render_props} />
    </Slide>

    <Slide id="hooks-everywhere-2">
      <Image src="images/hooks-morty.jpg" />
    </Slide>

    <Slide id="hooks-all-the-things">
      <Image src="images/hooks-all-the-things.jpg" />
    </Slide>

    <Slide id="hooks-everywhere">
      <Image src="images/hooks-everywhere.jpg" />
    </Slide>

    <Slide id="hooks-everywhere-3">
      <Image src="images/hooks-envy.jpg" />
    </Slide>

    <Slide id="hooks-everywhere-4">
      <Image src="images/hooks-choice.jpg" />
    </Slide>

    <Slide id="not-so-fast-hooks">
      <Image src="images/not-so-fast-hooks.jpg" />
    </Slide>

    <Slide id="not-so-fast-hooks-1">
      <Image src="images/not-so-fast-hooks-2.jpg" />
    </Slide>

    <Slide id="why-cant-x-be-a-hook">
      <Heading>Hooks cannot replace everything</Heading>
      <List>
        <ListItem>ContextProvider</ListItem>
        <ListItem>ErrorBoundries</ListItem>
        <ListItem>Top-level APIs</ListItem>
      </List>
    </Slide>

    <Slide id="why-cant-x-be-a-hook-2">
      <Heading>Meaning in the tree</Heading>
      <List>
        <ListItem>&lt;StrictMode&gt;</ListItem>
        <ListItem>&lt;ConcurrentMode&gt;</ListItem>
        <ListItem>&lt;ContextProvider&gt;</ListItem>
      </List>
    </Slide>

    <Slide id="error-boundries-cant-be-hooks">
      <Heading>Error boundries can't be hooks</Heading>
    </Slide>

    <Slide id="top-level-apis-1">
      <Heading>Top-level APIs can't be hooks</Heading>
    </Slide>

    <Slide id="hooks-vs-annotations">
    </Slide>

    <Slide id="top-level-apis-vs-annotations">
    </Slide>

    <Slide id="components">

    </Slide>

    <Slide id="composition">
    </Slide>

    <Slide id="refs">
    </Slide>

    <Slide id="effects">
    </Slide>

    <Slide id="context">
    </Slide>

    <Slide id="redux">
    </Slide>

    <Slide id="roadmap">
    </Slide>

    <Slide id="concurrent-rendering">
      <Heading>Async rendering</Heading>
    </Slide>

    <Slide id="suspense">
      <Heading>"Sync" data fetching</Heading>
    </Slide>

    <Slide id="server-side">

    </Slide>

    <Slide id="testing">
      jest
    </Slide>

    {/*
    <Slide id="hoc">
      the hoc dictates the interface
    </Slide>

    <Slide id="render-props">
      for when you need control
    </Slide>

    <Slide id="hooks">
      A simple yet elegant design
    </Slide>

    <Slide id="hook-2">
      Why functions and not annotations

      Why the order matters
    </Slide>

    <Slide id="hooks-3">
      Why is X not a hook

      Not everything can be expressed with a hook
    </Slide>
    */}
    <Slide id="top-level-apis-2">
    </Slide>

    <Slide id="should-it-change">
      PureComponent, React.memo, useMemo and when should a component re-render
    </Slide>

    <Slide id="quote">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>

    <Slide id="hooked-people">
      <Image src="images/hooked-people.jpg" />
    </Slide>

    <Slide id="thank-you">
      <Heading size={1}>Thank you!</Heading>
      <Heading size={1}>Enjoy the conf!</Heading>
    </Slide>
  </Deck>
);
