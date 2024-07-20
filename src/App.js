import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {

  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
