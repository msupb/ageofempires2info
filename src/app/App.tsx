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
import ListComponent from './components/list/listComponent';
import { ICivilization } from './models/civilization';
import { ITechnology } from './models/technology';
import ListFactory from './services/listFactory';
import DetailsFactoryComponent from './components/details/detailsFactoryComponent';
import EmitDetailsContext from './services/contexts/emitDetailsContext';
import { IModelBase } from './models/modelBase';
import Strings from './services/strings';
import HomeComponent from './components/home/homeComponent';

interface IState {
  civilizations: Array<ICivilization>;
  units: Array<IUnit>;
  technologies: Array<ITechnology>;
  structures: Array<IStructure>;
  isLoading: boolean;
  showDetails: boolean;
  linkedDetails: boolean;
  detailsItem: IModelBase;
}

class App extends Component<{}, IState> {

  constructor(props: {}, state: IState) {
    super(props);

    this.onDetailsClick = this.onDetailsClick.bind(this);

    this.state = {
      civilizations: [],
      units: [],
      technologies: [],
      structures: [],
      isLoading: true,
      showDetails: false,
      linkedDetails: false,
      detailsItem: {}
    };
  }
  
  async componentDidMount() {

    // For testing, refactor this

    const civPromise = new Promise<Array<ICivilization>>(async (resolve, reject) => {
      resolve(await HttpService.getList(Strings.civilizations));
    });

    const unitPromise = new Promise<Array<IUnit>>(async (resolve, reject) => {
      resolve(await HttpService.getList(Strings.units));
    });

    const techPromise = new Promise<Array<ITechnology>>(async (resolve, reject) => {
      resolve(await HttpService.getList(Strings.technologies));
    });

    const structPromise = new Promise<Array<IStructure>>(async (resolve, reject) => {
      resolve(await HttpService.getList(Strings.structures));
    });

    await Promise.all([civPromise, unitPromise, techPromise, structPromise]).then((data) => {
      if(data) {
        this.setState(({
            civilizations: ListFactory.GetList(data[0], Strings.civilizations),
            units: ListFactory.GetList(data[1], Strings.units),
            technologies: ListFactory.GetList(data[2], Strings.technologies),
            structures: ListFactory.GetList(data[3], Strings.structures),
            isLoading: false
        }));

        console.log('ALL RESOLVED AND STORED IN STATE', this.state);

      }
    }).catch((err) => console.log(err));
  }

  protected testClick(): void {
    console.log('testClick');
  }

  protected onDetailsClick(item: any): void {
    if(item) {
      this.setState(({
        ...this.state,
        detailsItem: item,
        showDetails: true
      }));
    } 
  }

  render() {

    // Refactor this, temporary solution

    const appStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/image1.jpg'})`,
      // backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      // backgroundRepeat: 'no-repeat',
    };

    //end

    return (
      <Fragment>
        <div style={appStyle}>
        <Router>
        <NavBar navClass="navbar navbar-expand-lg navbar-light bg-light" linkClass="nav-item nav-link" paths={Strings.getMenuItems()}></NavBar>
            <Switch>
                <Route path="/home" render={() => (<div className="container"><h1>Home</h1><CusButton btnType={'button'} btnText={'TEST BUTTON'} onClickMethod={this.testClick}></CusButton></div>)}>
                </Route>
                <EmitDetailsContext.Provider value={{clickMethod: this.onDetailsClick}}>
                  <Route path="/details/:category/:id">
                    <div className="container">
                      {this.state.detailsItem && <DetailsFactoryComponent item={this.state.detailsItem}></DetailsFactoryComponent>}
                    </div>
                  </Route>
                  <Route path="/civilizations">
                    <div className="container">
                      <ListComponent itemList={this.state.civilizations}></ListComponent>
                    </div>   
                  </Route>
                  <Route path="/units">
                    <div className="container">
                      <ListComponent itemList={this.state.units}></ListComponent>
                    </div>     
                  </Route>
                  <Route path="/technologies">
                    <div className="container">
                      <ListComponent itemList={this.state.technologies}></ListComponent>
                    </div>  
                  </Route>
                  <Route path="/structures">
                    <div className="container">
                      <ListComponent itemList={this.state.structures}></ListComponent>
                    </div>
                  </Route>
                </EmitDetailsContext.Provider>         
            </Switch>
        </Router>
        </div>
      </Fragment>
    );
  }
  
}

export default App;
