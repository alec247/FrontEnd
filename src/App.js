import './App.css';
import MainPage from './components/MainPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams } from "react-router-dom";
import StonkPage from "./components/StonkPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <MainPage subheading="This is our subheading hello look at stonks"/>
      </div>
      <Switch>
        <Route path="/StonkTest/:stonkTicker">
          <StonkTest />
        </Route>
      </Switch>
    </Router>
  );
}

function StonkTest() {
  let { stonkTicker } = useParams();

  return <StonkPage stonkTicker={ stonkTicker }>  </StonkPage>;
}




export default App;
