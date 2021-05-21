import logo from './logo.svg';
import './App.css';
import Any from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreetings from './components/UserGreetings'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import PureCom from './components/PureCom'
import Hero from './components/Hero'
import HooksCounter from './components/HooksCounter'

import './appStyles.css'
import styles from './components/myStyles.module.css'

import Form from './components/Form'
import ParentComp from './components/ParentComp';
import ErrorBoundary from './components/ErrorBoundary'
import PostList from './components/PostList';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext'
import HooksCounterTwo from './components/HooksCounterTwo'
import HooksCounterThree from './components/HooksCounterThree'
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'


function App() {
  return (
    <div className="App">

      {/* <ClassMouse /> */}

      {/* <HookMouse /> */}

    <MouseContainer />

{/* 
    <UserProvider value="John">
        <ComponentC/>
    </UserProvider>

    <HookCounterOne /> */}
    {/* <ClassCounterOne /> */}
     <hr>
     </hr>
     {/* <HookCounterOne/> */}

    {/* <HooksCounterTwo /> */}
    {/* <HooksCounterThree /> */}

    {/* <HooksCounter /> */}
   
     {/* <ErrorBoundary> */}
        {/* <Hero heroName="Superman"/> */}
        {/* <Hero heroName="Batman"/> */}
        {/* <Hero heroName="Joker"/> */}
        {/* <PostList /> */}
      {/* </ErrorBoundary> */}
      {/* <ParentComp/> */}

      {/* <PureCom /> */}

{/* 
    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}

      {/* <Any name="Bruce" heroName="Batman">
        <p>This is a child tag1</p>
        <p>This is a child tag2</p>
        <p>This is a child tag3</p>
      </Any>
      <Any name="Clark" heroName="Superman">
        <input type="text"></input>
        <button>Click</button>
      </Any>
      <Any name="Diana" heroName="Wonder Women"/> */}
      
      
      {/* <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Women"/>  */}
      {/* <Message /> */}

      {/* <Counter/> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreetings /> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/> */}

      {/* <Form /> */}
    
    </div>
  );
}

export default App;
