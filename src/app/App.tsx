import React, {Component, Fragment} from 'react';
import { IStructure } from './models/structure';
import { IUnit } from './models/unit';
import HttpService from './services/http/httpService';
import NavBar from './components/elements/nav/navBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ListComponent from './components/list/listComponent';
import { ICivilization } from './models/civilization';
import { ITechnology } from './models/technology';
import ItemBuilder from './services/itemBuilder';
import DetailsFactoryComponent from './components/details/linkDetail/detailsFactoryComponent';
import EmitDetailsContext from './services/contexts/emitDetailsContext';
import { IModelBase } from './models/modelBase';
import Strings from './services/strings';
import HomeComponent from './components/home/homeComponent';
import ListBoundary from './components/errorBoundary/listBoundary';
import DetailsBoundary from './components/errorBoundary/detailsBoundary';
import HomeBoundary from './components/errorBoundary/homeBoundary';

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

    // Load all API data on application start

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
            civilizations: ItemBuilder.GetList(data[0], Strings.civilizations),
            units: ItemBuilder.GetList(data[1], Strings.units),
            technologies: ItemBuilder.GetList(data[2], Strings.technologies),
            structures: ItemBuilder.GetList(data[3], Strings.structures),
            isLoading: false
        }));

      }
    }).catch((err) => console.log(err));
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

    return (
      <Fragment>
        <div className="background-container">
        <Router>
        <NavBar navClass="" linkClass="nav-item nav-link" paths={Strings.getMenuItems()}></NavBar>
            <Switch>
              <Redirect exact from="/" to="/home" />
                <Route path="/home">
                  <div className="container content-container">
                    <HomeBoundary>
                      <HomeComponent></HomeComponent>  
                    </HomeBoundary>  
                  </div>
                </Route>
                <EmitDetailsContext.Provider value={{clickMethod: this.onDetailsClick}}>
                  <Route path="/details/:category/:id">
                    <div className="container content-container">
                      <DetailsBoundary>
                        {this.state.detailsItem && <DetailsFactoryComponent item={this.state.detailsItem}></DetailsFactoryComponent>}
                      </DetailsBoundary>            
                    </div>
                  </Route>
                  <Route path="/civilizations">
                    <div className="container content-container">
                      <ListBoundary>
                        <ListComponent itemList={this.state.civilizations}></ListComponent>
                      </ListBoundary>
                     </div>   
                  </Route>
                   <Route path="/units">
                    <div className="container content-container">
                      <ListBoundary>
                        <ListComponent itemList={this.state.units}></ListComponent>
                      </ListBoundary>
                     </div>     
                   </Route>
                   <Route path="/technologies">
                    <div className="container content-container">
                      <ListBoundary>
                        <ListComponent itemList={this.state.technologies}></ListComponent>
                      </ListBoundary>
                     </div>  
                   </Route>
                  <Route path="/structures">
                     <div className="container content-container">
                       <ListBoundary>
                        <ListComponent itemList={this.state.structures}></ListComponent>
                       </ListBoundary>
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
