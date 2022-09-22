import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route path= "/home" component= {Home}/>
        {/* <Route path= '/activities' component= {ActivitiesCreate}/>
        <Route path= "/countries/:id" component= {Detail}/> */}
      </Switch>
      {/* <h1>Henry Countries</h1> */}
    </div>
    </BrowserRouter>
  );
}

export default App;