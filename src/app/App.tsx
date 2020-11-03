import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import { IStructure } from './models/structure';
import { IUnit } from './models/unit';
import HttpService from './services/http/httpService';

class App extends Component {

  async componentDidMount() {

    const data: Array<IStructure> = await HttpService.get('unit', 8);

    if(data) {
        console.log(data);
    }
  }

  render() {
    return (
      <h1>Hello</h1>
    );
  }
  
}

export default App;
