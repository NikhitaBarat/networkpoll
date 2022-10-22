import { Header } from './components';
import { Home } from './views';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/> 
      </Routes>
    </div>
  );
}

export default App;
