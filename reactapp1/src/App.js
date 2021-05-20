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

import './appStyles.css'
import styles from './components/myStyles.module.css'

import Form from './components/Form'



function App() {
  return (
    <div className="App">


    <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>

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

      <Form />
    
    </div>
  );
}

export default App;
