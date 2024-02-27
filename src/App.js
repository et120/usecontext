import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePageComponent from './components/ProfilePageComponent';
import UserContext from './UserContext/UserContext';
import UserHooks from './Hooks/UserHooks';

function App() {
  return (
    // Provider allows access to its value, which in this case is UserHooks, to all components. We call user hooks through our UserContext within our components.
    <UserContext.Provider value={UserHooks()}>

      <BrowserRouter>
      {/* wrapping our application to enable Routing */}

        <Routes>
          {/* '/' determines our homepage or our default rendered page */}
          <Route path='/' element={<HomePageComponent />} />
          <Route path='/profile' element={<ProfilePageComponent />} />
        </Routes>
        
      </BrowserRouter>

    </UserContext.Provider>
  );
}

export default App;
