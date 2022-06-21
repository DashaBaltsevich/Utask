
import { Routes, Route }from 'react-router-dom';
import { FirstScreen, LoginForm, RegistrationForm } from './components';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="second" element={<LoginForm />} />
          <Route path="registration" element={<RegistrationForm />} />
        </Routes>
    </div>
  );
}

export default App;
