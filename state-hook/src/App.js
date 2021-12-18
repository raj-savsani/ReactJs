
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo></HookCounterTwo>
      {/* <HookCounter></HookCounter> */}
      {/* <ClassCounter></ClassCounter> */}
    </div>
  );
}

export default App;
