import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <img logo></img>
      <MainPage subheading="This is our subheading hello look at stonks"></MainPage>
    </div>
  );
}

export default App;