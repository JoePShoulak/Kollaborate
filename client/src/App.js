import './App.css';
import Ship from './components/Ship';
import Header from './components/Header';
import Footer from './components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    // Needs to be wrapped in user context as soon as thats working
    <div className="App">
      <GoogleOAuthProvider clientId="82657227381-jiv8dbkh5unpbed4kt04rrffogiqtcok.apps.googleusercontent.com">
        <Header/>
        <Ship/>
        <Footer/>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
