import './App.css';
import CreateNote from './components/notes/CreateNote';
import ListNote from './components/notes/ListNote';

function App() {
  return (
    <div className="App">
      <CreateNote/>
      <ListNote/>
         
    </div>
  );
}

export default App;
