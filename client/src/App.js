import { Suspense } from 'react';
import { Header } from './components';
import { Home } from './views';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/> 
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
