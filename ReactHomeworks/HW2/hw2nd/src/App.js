import logo from './logo.svg';
import './App.css';
import LoginForm from'./Components/LogInForm.js';
import SignUpForm from './Components/SignUpForm.js';

function App() {
  return (
    <div className="App">
      <LoginForm/>
	  <SignUpForm/>
	  
    </div>
  );
}

export default App;
