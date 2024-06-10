import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import SignInForm from './components/SignInForm'; // Fixed typo
import SignUpForm from './components/SignUpForm';
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component

import './App.css';
function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Added route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
