
import './App.css';
import Calender from './components/Calender';
import Child from './components/Child';
import MyComponent from './components/MyComponent';
import Todo from './components/Todo';

function App() {
 
  return (
    <div className="App">
      <Child state = "default"></Child>
      <Child state = "bar"></Child>
      <Child state = "foo"></Child>
      <Calender />
      <MyComponent />
      <Todo />
    </div>
  );
}

export default App;

