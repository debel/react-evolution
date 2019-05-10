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
`  // can be replaced by a hook
  const EnhancedComponent = addingStuffTo(MyComponent);

  // cleaner as a higher-order components
  <DataList itemTemplate={MyItem} />

  // cannot be correctly implemented as a hook
  const PureComponent = React.memo(MyComponent); // controls rendering
  const LazyComponent = React.lazy(() => import('./MyComponent'));`);

export const hooks_vs_render_props = (
`  /* can be replaced by a hook */
  <AccessToSomeValue>
    {(value) => <Display value={value} />}
  </AccessToSomeValue>

  /* should keep using render props */
  <DataList renderItem={
    (type, text) => <MyItem className={cssClassFor(type)}>{text}</MyItem>
  } />`);

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

  export const nested_renderProps =
  `const MyButton () =>
    <ThemeContext.Consumer>
      {theme =>
        <LanguageContext.Consumer>
          {translations =>
            <button style={{color: theme.color}}>
              {translations.buttonText}
            </button>
          }
        </LanguageContext.Consumer>
      }
    </ThemeContext.Consumer>;`;

export const theme_hookContext =
`  const MyApp = () =>
    <ThemeContext.Provider>
      <LanguageContext.Provider>
        <Header/> <Content /> <Footer />
      <LanguageContext.Provider>
    </ThemeContext.Provider>;

  const MyButton () => {
    const theme = React.useContext(ThemeContext);
    const translations = React.useContext(LanguageContext);

    return <button style={{color: theme.color}}>
      {translations.buttonText}
    </button>;
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
`  const withSeenToggle = withState('seen', 'setSeen', false);

  const PrivacyWarning = withSeenToggle(({ seen, setSeen }) => {
    if (seen) { return null; }
    return <React.Fragment>
      Lorem ipsum, your data are belong to us
      <button onClick={() => setSeen(true)}>Ok</button>
    </React.Fragment>
  });`;

export const seen_hookState =
`function PrivacyWarning() {
  const [seen, setSeen] = React.useState(false);
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
      : <ContentThatMightThrowAnError />;
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
  React.useEffect(() => {
    window.title = \`Hello \${props.userName}\`;
    return () => { window.title = 'No user selected'; }
  }, [props.userName]);

  return <h1>Hello {props.userName}</h1>;
}`;

export const old_lifecycle_methods = (
`  class TheseAreNowUnsafe extends Component {
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

export const portals_example = (
`  function Modal({ children }) {
    return ReactDOM.createPortal(
      children,
      document.getElementById('modalRoot'),
    );
  }`);

export const lazy_loading_with_suspense = (
`  const ExtraContent = React.lazy(() => import('./ExtraContent'));

  const Page = () => (
    <div>
      <MainContent />
      <Suspense fallback={<Spinner size="small" />}>
        <ExtraContent />
      </Suspense>
    </div>
  );`);

export const useCustomHooks = (
`  function ProfileEditor = () => {
    const user = useCurrentUser(); // customHook
    const [avatarUrl, uploadNewAvatar] = useUserAvatar(user.id); // customHook

    if (!user) { return <Error message="Please login" />; }

    return (<div>
      <div>Username: {user.name}</div>
      <img src={avatar} />
      <input type="file" onChange={uploadNewAvatar} />
    </div>)
  }`);

export const suspense_data_fetching = (
`  import {unstable_createResource} from 'react-cache';
  const TodoResource = unstable_createResource(fetchTodo);

  function (props) {
    // Suspends until data is in the cache
    const todo = TodoResource.read(props.id);
    return <li>{todo.title}</li>;
  }

  const App() => (<React.Suspense fallback={<Spinner />}>
      <ul>
        <Todo id="1" /> {/* Siblings fetch in parallel */}
        <Todo id="2" />
      </ul>
    </React.Suspense>);`)


export const data_fetching_hook = (
`  const useFetch = (url) => {
    const [data, setData] = React.useState(null);
    fetch(url).then(setData);

    return data;
  };`);

export const concurrent_rendering = (
` const App = () => (
    <div>
      <ImportantInteractiveContent />
      <React.unstable_ConcurrentMode> /* API not finalized */
        <LowerPriorityContent />
      </React.unstable_ConcurrentMode>
    </div>
  );`);
