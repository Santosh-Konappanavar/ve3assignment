import './App.css';
import {Routes,Route} from 'react-router-dom'
import Modalpage from './components/modalpage';
import Tabs from './components/Tabs';
import Home from './components/landingpage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Modules' element={<Modalpage />}/>
        <Route path='/Modaltabs' element={<Tabs />} />
      </Routes>
    </div>
  );
}

export default App;
