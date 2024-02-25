import './App.css';
import Addtodo from './component/Addtodo';
import Todos from './component/Todos';

function App() {
  return (
    <div className="App m-5">
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
