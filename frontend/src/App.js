import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Workout from './pages/workout'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path = '/'
              element={<Home />}
            />

            <Route
              path = '/.id'
              element={<Workout />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
