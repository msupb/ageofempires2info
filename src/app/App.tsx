import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import { IStructure } from './models/structure';
import { IUnit } from './models/unit';
import HttpService from './services/http/httpService';
import NavBar from './components/elements/nav/navBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CusButton from './components/elements/button/cusButton';

class App extends Component {

  async componentDidMount() {

    const data: Array<IStructure> = await HttpService.get('unit', 8);

    if(data) {
        console.log(data);
    }
  }

  public testClick(): void {
    console.log("Test click");
  }

  render() {
    return (
      <Fragment>
        <Router>
          <div className="container">
            <NavBar navClass="navbar navbar-expand-lg navbar-light bg-light" linkClass="nav-item nav-link" paths={['home', 'civilizations', 'units', 'technologies']}></NavBar>
          </div>
          <Switch>
              <Route path="/home" render={() => (<div className="container"><h1>Home</h1><CusButton btnType={'button'} btnText={'TEST BUTTON'} onClickMethod={this.testClick}></CusButton></div>)}>
              </Route>
              <Route path="/civilizations" render={() => (<div className="container"><h1>Civilizations</h1></div>)}>
              </Route>
              <Route path="/units" render={() => (<div className="container"><h1>Units</h1></div>)}>
              </Route>
              <Route path="/technologies" render={() => (<div className="container"><h1>Technologies</h1></div>)}>
              </Route>
            </Switch>
        </Router>
      </Fragment>
    );
  }
  
}

export default App;
