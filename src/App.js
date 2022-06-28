
import { Routes, Route }from 'react-router-dom';
import { FirstScreen, LoginForm, RegistrationForm, UserInformationForm, Orders, Template } from './components';
import './App.css';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="userInformation" element={<Template><UserInformationForm /></Template>} />
          <Route path="orders" element={<Template><Orders /></Template>} />
        </Routes>
    </>
  );
}

export default App;
