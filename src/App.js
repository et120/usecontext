import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePageComponent from './components/HomePageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePageComponent from './components/ProfilePageComponent';

function App() {
  return (
    <BrowserRouter>
    {/* wrapping our application to enable Routing */}

      <Routes>
        {/* '/' determines our homepage or our default rendered page */}
        <Route path='/' element={<HomePageComponent />} />
        <Route path='/profile' element={<ProfilePageComponent />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
