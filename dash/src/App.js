import './App.css';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider 
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
    >
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
