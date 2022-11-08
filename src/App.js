import logo from './logo.svg';
import './App.css';
import Events from './components/Evetns';

function App() {
  return (
    <div>

      <ol>
        <li>
          <div> <strong>What is event in React</strong>
          <p>Just like HTML DOM events, React can perform actions based on events. An Event is an action that can be triggered upon user action or system generated event e.g clicking on a button, loading of a webpage, pressing a key etc.
            Event handlers are what makes it possible for users interact with your app.
          </p>
          <Events/>
          </div>
        </li> <br /> <br />

        <li>
          <div> <strong>What is memory leak and how to overcome</strong></div>
          <p>
            Every React Compponent has 3 main lifecycle methods namely, Mounting, Updating and Unmounting. In Mouting phase, the component is inserted into the DOM and displayed on the webpage and in the Unmounting phase the component is removed from the DOM.
            Any timers, network requests, setintervals, subscriptions etc what were created in the mounting phase, should be cleaned or cnacelled before unmounting. If we fail to do so, then that subscription will be stored in the memory and now we will have unimportant data in our app which is not accessible.
            If this process is repeated several times, useful memory will be filled up with unwanted data which can hamper its performance or crahs the system.
            in functional component, we use useEffect Hook to access the lifecycle methods, we can use the useEffect clean up function, which helps us clean up subscirptions and asynchrnour tasks.
          </p>
        </li> <br /> <br />

        <li>
          <div> <strong>Do you prefer Function based or Class Component and why</strong></div>
          <p>The real answer to this question is - It is your personal choice. Neither the Functional Component nor class component is better than the other, both have pros and cons. But ideally it is recommended to use the Functional Component as it is more concise, leading to cleaner and less complex code.</p>
          <ul>
            <li>
              <strong>Component Rendering</strong>
              In Class components , the render() methos is used for rendering the JSX by extending from React.Component. A Fucntional component is a plain JS function that takes in props as arguments and returns a jsx element. A functional compoenent does not require the render() function.
            </li>
            <li>
              <strong>Handling Props</strong>
              in Class Components this.props is used to access our name props. In Functional components we take sinel props as arguments(or prop names) and access them in '{}' either as props.name or the prop name directly. In Functional Component we do not need to worry about the "this" keyword
            </li>

            <li>
              <strong>Handling State</strong>
              in Class Components, we use the constructor function & super function to intialize the state values. In Functional Components state is implemented usind the useState() Hook. In Function Component , we do not need to use the "this.state" to manipulate the state and also a constructor function is not needed
            </li>

            <li>
              <strong>Lifecycle Methods</strong>
              A class components has lifecycle methods whereas in function component, we use the useEffect hook to implement lifecycle methods. The useEffect is confusing because we use the same Hook for all lifecycle methods. In class components, we can directly use the methods we want e.g. componentDidMount
            </li>
          </ul>
        </li> <br /> <br />

        <li>
          <strong>Explain Reducer as pur function in Redux</strong>
        <p>Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.</p>
        <ul>
          <h5>Rules of Reducers</h5>
          <li>They should only calculate the new state value based on the state and action arguments</li>
        <li>They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.</li>
        <li>They must not do any asynchronous logic or other "side effects"</li>
        </ul>
        
        </li> <br /><br />

        <li>
          <div><strong>Why do we need reduc thunk</strong></div>
          <p>
          Thunk us a  redux middleware. It allows us to return functions instead of objects from redux actions. Plain redux doesn’t allow complex logic inside action functions, you can only perform simple synchronous updates by dispatching actions. This middleware extends its ability and lets you write complex logic that interacts with the store. Thunk doesn’t interfere with the action until it returns a function. Thunk allows us to dispatch actions manually, which gives us the power to incorporate some logic or run some asynchronous code before dispatching an action. The function returned from action is called a thunk function which is called with two arguments :  <br />

1. dispatch: It is a method used to dispatch actions, that can be received by reducers.  <br />
2. getState: It gives access to store inside the thunk function.
          </p>
        </li> <br /> <br />

        <li>
          <div><strong>What is NPM</strong></div>
        <p>NPM is a node package manager. It helps us install, uninstall or remove packages that are essential for our application. All the packages/modules of the React are node packages, so we use npm for adding/installing pacakages or modules for our react application.</p>
        </li>
      </ol>
    
    </div>
  );
}

export default App;
