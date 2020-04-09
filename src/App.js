import React from 'react';
import './App.scss';
import Homepage from './pages/homepage/homepage';
import { Switch, Route} from 'react-router-dom';


 
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/" component ={Homepage}></Route>
        <Route exact path = "/hats" component={HatsPage} ></Route>
      </Switch>
    
    </div>
  );
}

export default App;