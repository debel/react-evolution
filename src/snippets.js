export const imperativeDOM = (
` var btn = document.getElementById('hope-it-exists');

  btn.addEventListener( // let's hope we remember to clean this up...
    'click',
    window.manipulateRandomGlobalState
  );

  btn.innerHTML = \`Hello \${window.user.name}\`; // possible XSS? oopsie!`);

export const reactDOM = (
` function ReactButton = props => (
    <button onClick={props.manipulateSpecificLocalState}>
      {props.userName}
    </button>);`);

export const hooks_vs_hocs = (
`   withSomeAspect(MyComponent); // can be replaced by a hook
   withSomeConsideration(MyComponent); // should remain a HOC

   const withSomeConsideration = (BaseComponent) => {
     switch (someCondition) {
       case 'A': return <BaseComponent {...propsForA} />;
       case 'B': return <BaseComponent {...propsForB} />;
       default: return <BuiltInFallback />;
     }
   };`);

export const hooks_vs_render_props = (
`  <AccessToSomeValue>
    {(value) => <Display value={value} />} /* can be replaced by a hook */
  </AccessToSomeValue>

  <DataList itemTemplate={MyItem} /> /* should keep using render props */`);

export const searchBox_class_string_ref =
`class SearchBox extends React.Component {
  componentDidMount() {
    this.refs.searchBox.focus();
  }

  render() {
    return <React.Fragment>
      <input ref="searchBox" />
      <button onClick={this.props.submit} />
    </React.Fragment>
  }
}`;

export const searchBox_class_callback_ref =
`class SearchBox extends React.Component {
  componentDidMount() {
    this.searchBox.focus();
  }

  render() {
    return <React.Fragment>
      <input ref={ref => this.searchBox = ref} />
      <button onClick={this.props.submit} />
    </React.Fragment>
  }
}`;

export const searchBox_class_instance_ref =
`class SearchBox extends React.Component {
  searchBoxRef = React.createRef();

  componentDidMount() {
    this.searchBoxRef.current.focus();
  }

  render() {
    return <React.Fragment>
      <input ref={this.searchBoxRef} />
      <button onClick={this.props.submit} />
    </React.Fragment>
  }
}`;

export const searchBox_func_hook_ref =
`const SearchBox = (props) => {
  const searchBoxRef = React.useRef();
  React.useEffect(() => searchBoxRef.current.focus());
  return (
    <React.Fragment>
      <input ref={searchBoxRef} />
      <button onClick={props.submit} />
    </React.Fragment>
  );
}`;

export const useFocusOnMount_customHook =
`const useFocusOnMount = (ref) => {
  const refToFocus = ref || React.useRef();
  React.useEffect(() => refToFocus.current.focus(), []);
  return refToFocus;
};`

export const searchBox_func_custom_hooks =
`const SearchBox = (props) => {
  const searchBoxRef = useFocusOnMount();
  const theme = useCustomTheme();
  return (<React.Fragment>
      <input ref={searchBoxRef} />
      <button style={theme} onClick={props.submit} />
    </React.Fragment>);
}`;

export const theme_legacyContext =
`class MyApp extends React.Component {
  getChildContext() {
    return { theme: { color: "purple" } };
  }
  // ...
}

class MyButton extends React.Component {
  render() {
    return (
      <button style={{color: this.context.theme.color}}>`;


export const theme_renderPropsContext =
`export const ThemeContext = React.createContext();

const MyApp = () =>
  <ThemeContext.Provider value={{ color: 'green' }}>
    <Header/> <Content /> <Footer />
  </ThemeContext.Provider>;

const MyButton () =>
  <ThemeContext.Consumer>
    {(theme) => <button style={{color: theme.color}}>}
  </ThemeContext.Consumer>;`;

export const theme_hookContext =
`export const ThemeContext =
  React.createContext({ color: 'red' });

const MyApp = () =>
  <ThemeContext.Provider>
    <Header/> <Content /> <Footer />
  </ThemeContext.Provider>;

const MyButton () => {
  const theme = useContext(ThemeContext);
  return <button style={{color: theme.color}}>;
};`;

export const componentHookExpression =
`const SearchBox = (props) => (
  searchBoxRef = useFocusOnMount(),
  theme = useCustomTheme(),
  <React.Fragment>
      <input ref={searchBoxRef} />
      <button style={theme} onClick={props.submit} />
  </React.Fragment>);`;

export const seen_classState =
`class PrivacyWarning extends React.Component {
  state = { seen: false };

  handleClick() { this.setState({ seen: true }); }

  render() {
    if (this.state.seen) { return null; }
    return <React.Fragment>
      Lorem ipsum, your data are belong to us
      <button onClick={handleClick}>Ok</button>
    </React.Fragment>
  }`;

export const seen_hocState =
`  const PrivacyWarning = withState('seen', 'setSeen', false)(
    ({ seen, setSeen }) => {
      if (seen) { return null; }
      return <React.Fragment>
        Lorem ipsum, your data are belong to us
        <button onClick={() => setSeen(true)}>Ok</button>
      </React.Fragment>
    });`;

export const seen_hookState =
`function PrivacyWarning() {
  const [seen, setSeen] = useState(false);
  if (seen) { return null; }
  return <React.Fragment>
    Lorem ipsum, your data are belong to us
    <button onClick={() => setSeen(true)}>Ok</button>
  </React.Fragment>
}
`;

export const functional_errorBoundry =
`const MyApp = () =>
  <ErrorBoundry>
    { error => error !== null
      ? <LoginBox /> : <VIPContent /> }
  <ErrorBoundry>;`;

export const errorBoundry_renderProps =
`class ErrorBoundry extends React.Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.props.children(this.state.error);
  }
}`;

export const errorBoundry_example1 =
`class ErrorBoundry extends React.Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.state.error
      ? <Error message="Oopsiee!" />
      : <ImportantContent />;
  }
}`;


export const errorBoundry_hook =
`const ErrorBoundry = () => {
  const caughtError = useErrorCatching();
  if (caughtError !== null) { return <LoginPage />; }
  return <VIPContent />;
}`;

export const vipContent_usingAuth =
`const VIPContent = () => {
  useAuth(); // a hook that might throw
  return 'secret paid content';
};`;

export const useAuth =
`const useAuth = () => {
  const user = useContext(UserContext);
  if (user === null) { throw new Error('Login Required'); }
  return user;
}`;

export const dynamicContext_hook =
`const DynamicContext = React.createContext();

const StatefulProvider = ({ initialValue, children }) => {
  const [value, setValue] = useState(initialValue);
  <DynamicContext.Provider value={[ value, setValue ]}>
   {children}
  <Context.Provider />
}

const ContextConsumer = () => {
  const [value, setValue] = useContext(DynamicContext);
  return <button onClick={() => setValue(v => v + 1)}>+</button>;
}`

export const method_side_effects =
`class MyComponent extends React.Component {
  componentDidMount() {
    window.title = \`Hello \${this.props.userName}\`;
  }

  componentDidUpdate() {
    window.title = \`Hello \${this.props.userName}\`;
  }

  componentWillUnmount() {
    window.title = 'No user selected';
  }
}`;

export const hook_side_effects =
`function MyComponent(props) {
  useEffect(() => {
    window.title = \`Hello \${props.userName}\`;
    return () => { window.title = 'No user selected'; }
  });
  // ...
}`;

export const old_lifecycle_methods = (
`  class Oldtimer extends Component {
    componentWillMount() {} // misused for data fetching

    componentWillReceiveProps() {} // causes infinate re-rendering

    componentWillUpdate() {} // will receive stale props with async rendering
  }`);

export const hook_redux =
`function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <React.Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </React.Fragment>
  );
}
`;

export const old_mixins = (
`  var TickTock = createReactClass({
    mixins: [SetIntervalMixin('tick', 1000)], // using a mixin
    getInitialState: function() {
      return {seconds: 0};
    },
    tick: function() { // mixin calls the component's method?!
      this.setState({seconds: this.state.seconds + 1});
    },
    render: function() {
      return <p>{this.state.seconds} seconds have passed</p>;
    }
  });`);


export const more_return_types = (
`  const HelloWorld = () => 'Hello World!';

  const Pi = () => 3.14;

  const ArrayOfNumbers = () => [1, 2, 3];

  const PartOfAList = () => (
    <React.Fragment>
      <li>3</li>
      <li>4</li>
    </React.Fragment>
  )`);
