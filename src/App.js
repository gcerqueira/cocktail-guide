import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWT7nvSTSDQD2zkWM0LgeSKUmhwm7RPJA",
  authDomain: "cocktail-guide-21a92.firebaseapp.com",
  projectId: "cocktail-guide-21a92",
  storageBucket: "cocktail-guide-21a92.appspot.com",
  messagingSenderId: "54617687243",
  appId: "1:54617687243:web:03f1ee7f32b0fc1499874e",
  measurementId: "G-TXQJW0TP84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
