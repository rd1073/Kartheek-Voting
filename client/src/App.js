import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dasboard';
import Voting from './components/dasboard';
import ResultsPage from './components/result';
import { AuthProvider, useAuth } from '../src/context/authContext';



function App() {
  


  return (
    <AuthProvider>
    <div className="App">
      <Router>
      <div>
        
      

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Voting/>} />
          <Route path="/winner" element={<ResultsPage/>} />
  
 

           
          


          




        </Routes>
        
      </div>
    </Router>
          
    </div>
    </AuthProvider>
  );
}

export default App;
