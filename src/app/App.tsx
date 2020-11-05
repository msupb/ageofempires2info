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
import DetailsComponent from './components/details/detailsComponent';
import EmitDetailsContext from './services/contexts/emitDetailsContext';
import { IModelBase } from './models/modelBase';

interface IState {
  civilizations: Array<ICivilization>;
  units: Array<IUnit>;
  technologies: Array<ITechnology>;
  structures: Array<IStructure>;
  isLoading: boolean;
  showDetails: boolean;
  detailsItem: IModelBase | null;
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
      detailsItem: null
    };
  }
  
  async componentDidMount() {

    // For testing, refactor this

    const civPromise = new Promise<Array<ICivilization>>(async (resolve, reject) => {
      resolve(await HttpService.getList('civilizations'));
    });

    const unitPromise = new Promise<Array<IUnit>>(async (resolve, reject) => {
      resolve(await HttpService.getList('units'));
    });

    const techPromise = new Promise<Array<ITechnology>>(async (resolve, reject) => {
      resolve(await HttpService.getList('technologies'));
    });

    const structPromise = new Promise<Array<IStructure>>(async (resolve, reject) => {
      resolve(await HttpService.getList('structures'));
    });

    await Promise.all([civPromise, unitPromise, techPromise, structPromise]).then((data) => {
      if(data) {
        this.setState(({
            civilizations: ListFactory.GetList(data[0], 'civilizations'),
            units: ListFactory.GetList(data[1], 'units'),
            technologies: ListFactory.GetList(data[2], 'technologies'),
            structures: ListFactory.GetList(data[3], 'structures'),
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
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/image4.jpg'})`,
      // backgroundSize: 'cover', 
      backgroundPosition: 'center center',
      // backgroundRepeat: 'no-repeat',
    };

    return (
      <Fragment>
        <div style={appStyle}>
        <Router>
        <NavBar navClass="navbar navbar-expand-lg navbar-light bg-light" linkClass="nav-item nav-link" paths={['home', 'civilizations', 'units', 'technologies', 'structures']}></NavBar>
            <Switch>
                <Route path="/home" render={() => (<div className="container"><h1>Home</h1><CusButton btnType={'button'} btnText={'TEST BUTTON'} onClickMethod={this.testClick}></CusButton></div>)}>
                </Route>
                <Route path="/details">
                  <div className="container">
                    {this.state.detailsItem && <DetailsComponent item={this.state.detailsItem}></DetailsComponent>}
                  </div>
                </Route>
                <EmitDetailsContext.Provider value={{clickMethod: this.onDetailsClick}}>
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
