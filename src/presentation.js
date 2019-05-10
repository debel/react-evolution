import React from 'react';

import {
  BlockQuote,
  Cite,
  Code,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import {
  CodePane,
  Deck,
  Heading,
  Marquee,
  Note,
} from './utils';

import {
  imperativeDOM,
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
  theme_hookContext,
  lazy_loading_with_suspense,
  useCustomHooks,
  suspense_data_fetching,
  concurrent_rendering,
  nested_renderProps
} from './snippets';

export default () => (
  <Deck>
    <Slide id="title">
      <Image src="images/evolution.png" />
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
      <Text>A big <span style={{ fontWeight: 'bold' }}>thank you</span> to the organizers of</Text>
      <Heading>&lt;React.Not.A.Conf /&gt;</Heading>
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

    <Slide id="jquery">
      <Image src="images/jquery.jpg" />
    </Slide>

    <Slide id="react">
      <Image width="20%" src="images/love-react-2.png" />
      <Heading>But then came React</Heading>
      <Text>And React was declarative</Text>
      <Text>And everything has been perfect ever since*</Text>
      <Marquee text="Your experience may vary, BUT you are at a React Conf so... lol?! wtf? ftw!" />
    </Slide>

    {/*<Slide id="react-example">
      <CodePane src={reactDOM} />
    </Slide>*/}

    <Slide id="evolution">
      <Heading>Evolution</Heading>
      <List>
        <ListItem>Small change over time</ListItem>
        <ListItem>Emergent non-directed change</ListItem>
        <ListItem>No discernible goals</ListItem>
        <ListItem>No notion of elegance</ListItem>
      </List>
    </Slide>

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
        <ListItem>Backwards compatibility</ListItem>
        <ListItem>Long-term roadmap</ListItem>
      </List>
    </Slide>

    <Slide id="quote-1">
      <BlockQuote>
        <Quote>
          Great APIs not only let you fall into a pit of success, but help you stay there.
          <br />
          They’re optimized for change.
        </Quote>
        <Cite>Dan Abramov @ <Link href="https://overreacted.io/optimized-for-change/">overreacted.io</Link></Cite>
      </BlockQuote>
    </Slide>

    <Slide id="depreciation">
      <Heading>Some features have been deprecated</Heading>
      <Note>(But nothing is ever really gone)</Note>
    </Slide>

    <Slide id="deprecated-lifecycle-methods">
      <Heading>Deprecated: lifecycle methods</Heading>
      <CodePane src={old_lifecycle_methods}/>
    </Slide>

    <Slide id="deprecated-string-refs">
      <Heading>Deprecated: string refs</Heading>
      <CodePane src={searchBox_class_string_ref} />
    </Slide>

    <Slide id="deprecated-context">
      <Heading>Deprecated context</Heading>
      <CodePane src={theme_legacyContext} />
    </Slide>

    <Slide id="deprecated-mixins">
      <Heading>Deprecated mixins</Heading>
      <CodePane src={old_mixins} />
    </Slide>

    <Slide id="new-features">
      <Heading>So many new features</Heading>
      <Note>But old project can (usually) upgrade with minimal effort</Note>
    </Slide>

    <Slide id="types">
      <Heading>Type Safety</Heading>
      <List>
        <ListItem>Prop types</ListItem>
        <ListItem>Flow</ListItem>
        <ListItem>TypeScript</ListItem>
        <ListItem>ReasonML</ListItem>
      </List>
    </Slide>

    <Slide id="tooling">
      <Heading>Dev Tools</Heading>
      <List>
        <ListItem>DevTools Plugin</ListItem>
        <ListItem>&lt;Profiler&gt;</ListItem>
        <ListItem>&lt;StrictMode&gt;</ListItem>
      </List>
    </Slide>

    <Slide id="modularity">
      <Heading>v15.6: Single responsibility</Heading>
      <Note>React transitioned from a mono package to a number of
      smaller more focused packages</Note>
    </Slide>

    <Slide id="error-boundries">
      <Heading>v16.0: Error boundries</Heading>
      <CodePane src={errorBoundry_example1} />
    </Slide>

    <Slide id="elements">
      <Heading>v16.2: Fragments</Heading>
      <CodePane src={more_return_types} />
    </Slide>

    <Slide id="new-context-api">
      <Heading>v16.3: New Context API</Heading>
      <CodePane src={theme_renderPropsContext} />
    </Slide>

    <Slide id="lazy-loading">
      <Heading>v16.6: Lazy loading with Suspense</Heading>
      <CodePane src={lazy_loading_with_suspense} />
    </Slide>

    <Slide id="enter-hooks">
      <Heading>v16.8: Hooks</Heading>
      <Image src="images/we-want-hooks.jpg" />
    </Slide>

    <Slide id="classical-effects">
      <Heading>Classical side-effects</Heading>
      <CodePane src={method_side_effects} />
    </Slide>

    <Slide id="hook-effects">
      <Heading>Side-effects with hooks</Heading>
      <CodePane src={hook_side_effects} />
    </Slide>

    <Slide id="hooks-everywhere-2">
      <Image src="images/hooks-morty.jpg" />
    </Slide>

    <Slide id="classical-state">
      <Heading>Classical state</Heading>
      <CodePane src={seen_classState} />
    </Slide>

    <Slide id="hoc-state">
      <Heading>HOC state</Heading>
      <CodePane src={seen_hocState} />
    </Slide>

    <Slide id="hooks-state">
      <Heading>Hooks state</Heading>
      <CodePane src={seen_hookState} />
    </Slide>

    <Slide id="hooks-everywhere">
      <Image src="images/hooks-everywhere.jpg" />
    </Slide>

    <Slide id="render-props-context">
      <Heading>Render-prop context</Heading>
      <CodePane src={nested_renderProps} />
    </Slide>

    <Slide id="hooks-context">
      <Heading>Hooks context</Heading>
      <CodePane src={theme_hookContext} />
    </Slide>

    <Slide id="hooks-all-the-things">
      <Image src="images/hooks-all-the-things.jpg" />
    </Slide>

    <Slide id="quote-hooks">
      <BlockQuote>
        <Quote>
          Hooks are like functional mixins that let you create and compose your own abstractions.
        </Quote>
        <Cite>Dan Abramov @ <Link href="https://overreacted.io/why-do-hooks-rely-on-call-order/">overreacted.io</Link></Cite>
      </BlockQuote>
    </Slide>

    <Slide id="hooks-composition">
      <Heading>Custom hooks:<br/> The new mixins</Heading>
      <Note>decorators wouldn't have allowed for hooks data passing</Note>
      <CodePane src={useCustomHooks} />
    </Slide>

    <Slide id="the-power-of-hooks">
      <Heading>The power of hooks</Heading>
      <List>
        <ListItem>Reduce unnecessary component nesting</ListItem>
        <ListItem>Reduce unnecessary rendering</ListItem>
        <ListItem>Improve logic sharing and code reuse</ListItem>
        <ListItem>Improve performance and readability</ListItem>
        <ListItem>Enable a more functional style</ListItem>
      </List>
    </Slide>

    <Slide id="enter-hooks-1">
      <Image src="images/hooks-only-pattern.jpg" />
    </Slide>

    <Slide id="hooks-everywhere-3">
      <Image src="images/hooks-envy.jpg" />
    </Slide>

    <Slide id="hooks-everywhere-4">
      <Image src="images/hooks-choice.jpg" />
    </Slide>

    <Slide id="not-so-fast-hooks">
      <Image src="images/not-so-fast-hooks-3.jpg" />
    </Slide>

    <Slide id="why-cant-x-be-a-hook">
      <Heading>Hooks cannot replace everything</Heading>
      <List>
        <ListItem>ContextProvider</ListItem>
        <ListItem>Error boundries</ListItem>
        <ListItem>React.lazy</ListItem>
        <ListItem>And more</ListItem>
      </List>
    </Slide>

    <Slide id="patterns">
      <Heading>Patterns are just tools</Heading>
      <List>
        <ListItem>Higher-order components</ListItem>
        <ListItem>Container components</ListItem>
        <ListItem>Render props</ListItem>
        <ListItem>Hooks</ListItem>
      </List>
    </Slide>

    <Slide id="hooks-vs-hoc">
      <Heading>Hooks vs HOCs</Heading>
      <Note>You can delegate control to a HOC</Note>
      <CodePane src={hooks_vs_hocs} />
    </Slide>

    <Slide id="hooks-vs-render-props">
      <Heading>Hooks vs render props</Heading>
      <Note>Render props allow a component to delegate to you</Note>
      <CodePane src={hooks_vs_render_props} />
    </Slide>

    <Slide id="why-cant-x-be-a-hook-2">
      <Heading fit>Special containers can't be hooks</Heading>
      <Note>
        They have an explicit meaning in the tree structure
        (i.e. their position affects how errors/bailouts/context propagate up or down)
      </Note>
      <List>
        <ListItem>&lt;Suspense&gt;</ListItem>
        <ListItem>Error boundries</ListItem>
        <ListItem>&lt;ContextProvider&gt;</ListItem>
        <ListItem>&lt;ConcurrentMode&gt;</ListItem>
      </List>
    </Slide>

    <Slide id="not-hooks-quote">
      <Heading></Heading>
        <BlockQuote>
          <Quote>
            A hook should not be able to "hide"
            these without them being reflected in the tree structure.
          </Quote>
          <Cite>Dan Abramov @ <Link href="https://github.com/facebook/react/issues/14347#issuecomment-456861860">github.com</Link></Cite>
        </BlockQuote>
    </Slide>

    <Slide id="roadmap">
      <Heading>What comes next?</Heading>
      <List>
        <ListItem>ConcurrentMode - async rendering</ListItem>
        <ListItem>Suspense - "sync" data fetching</ListItem>
      </List>
      <Note>You can experiment with these today!</Note>
    </Slide>

    <Slide id="concurrent-rendering">
      <Heading>Async rendering</Heading>
      <Note>Allows rendering to happen in multiple event-loop ticks</Note>
      <CodePane src={concurrent_rendering} />
    </Slide>

    <Slide id="data-suspense">
      <Heading>"Sync" data fetching</Heading>
      <CodePane src={suspense_data_fetching} />
    </Slide>

    <Slide id="quote-2">
      <BlockQuote>
        <Quote>
          Great APIs not only let you fall into a pit of success, but help you stay there.
          <br />
          They’re optimized for change.
        </Quote>
        <Cite>Dan Abramov @ <Link href="https://overreacted.io/optimized-for-change/">overreacted.io</Link></Cite>
      </BlockQuote>
    </Slide>

    <Slide id="hooked-people">
      <Image src="images/hooked-people.jpg" />
    </Slide>

    <Slide id="thank-you">
      <Heading size={1}>Thank you!</Heading>
      <Image src="images/NotAConf-logo.png" />
      <Heading size={1}>Enjoy the conf!</Heading>
    </Slide>
  </Deck>
);
